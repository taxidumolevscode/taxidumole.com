// Arrêté DDPP/PSC-2026-348, publié le 11 février 2026.
export const tariff2026 = Object.freeze({ base: 355, minimum: 800, A: 125, B: 186, C: 250, D: 372, hourly: 2850 });

function holidays(year) {
  const a = year % 19, b = Math.floor(year / 100), c = year % 100;
  const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = (h + l - 7 * m + 114) % 31 + 1;
  const easter = Date.UTC(year, month - 1, day);
  return new Set([
    ...['01-01', '05-01', '05-08', '07-14', '08-15', '11-01', '11-11', '12-25'].map(x => `${year}-${x}`),
    ...[1, 39, 50].map(offset => new Date(easter + offset * 86400000).toISOString().slice(0, 10)),
  ]);
}

export function estimateFare({ date, heure, meters, passagers = '1' }) {
  if (!/^2026-\d{2}-\d{2}$/.test(date) || date < '2026-02-11') throw new Error('La grille de cette date n’est pas vérifiée. Demandez un devis pour 2027.');
  const parsed = new Date(`${date}T12:00:00Z`);
  if (!Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== date || !/^([01]\d|2[0-3]):[0-5]\d$/.test(heure)) throw new Error('Date ou heure invalide.');
  if (!Number.isFinite(meters) || meters <= 0 || !/^[1-8]$/.test(String(passagers))) throw new Error('Trajet invalide.');
  // Inputs represent local Europe/Paris wall time, not the server timezone.
  const hour = Number(heure.slice(0, 2));
  const night = hour < 8 || hour >= 19 || parsed.getUTCDay() === 0 || holidays(2026).has(date);
  const category = night ? 'D' : 'C';
  const passengerCents = Math.max(0, Number(passagers) - 4) * 400;
  const totalCents = Math.max(tariff2026.minimum, tariff2026.base + Math.round(meters * tariff2026[category] / 1000) + passengerCents);
  return { totalCents, category, perKmCents: tariff2026[category], baseCents: tariff2026.base, passengerCents, year: 2026 };
}
