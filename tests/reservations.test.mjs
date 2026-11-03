import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// Load the Pages API module without changing the project's CommonJS config.
const source = await readFile(new URL('../pages/api/reservations.js', import.meta.url), 'utf8');
const { default: handler } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const futureDate = new Date(Date.now() + 86400000 * 30).toISOString().slice(0, 10);
const booking = { nom: 'Test local', telephone: '0600000000', email: 'test@example.com', date: futureDate, heure: '09:30', depart: 'Bonneville', destination: 'Genève', passagers: '3', message: 'Deux valises et des skis' };
const run = async (body = booking, method = 'POST') => {
  const result = { headers: {}, setHeader(key, value) { this.headers[key] = value; }, status(code) { this.code = code; return this; }, json(data) { this.body = data; return this; } };
  await handler({ method, body }, result);
  return result;
};

test('rejects missing email and invalid inputs before contacting Google', async (t) => {
  const stub = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Must not call Google'); });
  for (const body of [{ ...booking, email: '' }, { ...booking, passagers: '99' }, { ...booking, date: '2027-02-30' }, { ...booking, nom: ['invalide'] }]) {
    assert.equal((await run(body)).code, 400);
  }
  assert.equal((await run(booking, 'GET')).code, 405);
  assert.equal(stub.mock.callCount(), 0);
});

test('forwards the exact field names of the supplied working form', async (t) => {
  const stub = t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.match(url, /^https:\/\/script.google.com\/macros\/s\//);
    assert.equal(options.method, 'POST');
    assert.equal(options.redirect, 'follow');
    const fields = Object.fromEntries(new URLSearchParams(options.body));
    assert.deepEqual(fields, { name: booking.nom, phone: booking.telephone, email: booking.email, date: futureDate, time: '09:30', pickup: 'Bonneville', destination: 'Genève', infos: 'Passagers : 3\nDeux valises et des skis' });
    return new Response('<html><body>Demande reçue</body></html>', { status: 200, headers: { 'content-type': 'text/html' } });
  });
  const result = await run();
  assert.equal(result.code, 200);
  assert.deepEqual(result.body, { transmitted: true });
  assert.equal(stub.mock.callCount(), 1);
});

test('rejects upstream HTML errors even with HTTP 200', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => new Response('<html>Exception: Mail quota exceeded</html>', { status: 200 }));
  assert.equal((await run()).code, 502);
});

test('rejects explicit JSON failures and malformed responses', async (t) => {
  const stub = t.mock.method(globalThis, 'fetch');
  for (const body of ['{"success":false}', '{"result":"error"}', 'invalid-json']) {
    stub.mock.mockImplementation(async () => new Response(body, { headers: { 'content-type': 'application/json' } }));
    assert.equal((await run()).code, 502);
  }
});

test('a failed connection does not claim success or automatically retry', async (t) => {
  const stub = t.mock.method(globalThis, 'fetch', async () => { throw new Error('timeout'); });
  const result = await run();
  assert.equal(result.code, 502);
  assert.match(result.body.error, /doublon/);
  assert.equal(stub.mock.callCount(), 1);
});
