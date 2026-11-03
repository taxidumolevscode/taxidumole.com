import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Download, MapPin, Search } from "lucide-react";
import SeoHead from "../components/layout/SeoHead";
import AppShell, { PageIntro } from "../components/mobility/AppShell";
import skiOptions from "../public/data/destinations-ski.json";

const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const typeLabels = { village: "Village", station: "Station", nordique: "Domaine nordique" };
const destinationGroups = skiOptions.groups.map((group) => ({ ...group, destinations: [...group.destinations].sort((first, second) => first.label.localeCompare(second.label, "fr")) }));

export default function SkiOptionsPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [originId, setOriginId] = useState(skiOptions.origins[0].id);
  const [destinationId, setDestinationId] = useState("");
  const [sector, setSector] = useState("");
  const destinations = useMemo(() => destinationGroups.flatMap((group) => group.destinations), []);
  const selected = destinations.find((destination) => destination.id === destinationId);
  const origin = skiOptions.origins.find((item) => item.id === originId);
  const filteredGroups = useMemo(() => {
    const terms = normalize(search.trim()).split(/\s+/).filter(Boolean);
    return destinationGroups
      .filter((group) => !region || group.id === region)
      .map((group) => ({
        ...group,
        destinations: group.destinations.filter((destination) => {
          const text = normalize([destination.label, group.label, destination.area || "", ...(destination.sectors || [])].join(" "));
          return terms.every((term) => text.includes(term));
        }),
      }))
      .filter((group) => group.destinations.length);
  }, [search, region]);
  const resultCount = filteredGroups.reduce((count, group) => count + group.destinations.length, 0);

  function resetFilters() {
    setSearch("");
    setRegion("");
  }

  function selectDestination(id) {
    if (id === destinationId) return;
    setDestinationId(id);
    setSector("");
  }

  return (
    <>
      <SeoHead title="Destinations ski" description="Explorez les stations, villages et domaines nordiques pour préparer votre transfert depuis Genève ou la Haute-Savoie avec Taxi du Môle." />
      <AppShell>
        <nav aria-label="Fil d'Ariane" className="directory-breadcrumb">
          <Link href="/ski-transfert"><ArrowLeft size={16} aria-hidden="true" /> Ski transfert</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Destinations ski</span>
        </nav>
        <PageIntro eyebrow="Destinations ski" title="Trouvez votre station, préparez votre transfert.">
          Recherchez une station, un village ou un secteur, puis choisissez votre départ. Nous confirmons personnellement le trajet et le prix avant réservation.
        </PageIntro>
        <section className="app-content-section" aria-label="Répertoire des destinations ski">
          <div className="directory-filters">
            <label className="app-field" htmlFor="destination-search">
              <span>Rechercher une destination ou un secteur</span>
              <div><Search size={19} aria-hidden="true" /><input id="destination-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Station, village, secteur…" /></div>
            </label>
            <label className="app-field" htmlFor="region-filter">
              <span>Région ou domaine</span>
              <div><select id="region-filter" value={region} onChange={(event) => setRegion(event.target.value)}><option value="">Toutes les régions</option>{destinationGroups.map((group) => <option key={group.id} value={group.id}>{group.label}</option>)}</select></div>
            </label>
            <button className="app-secondary filter-reset" type="button" onClick={resetFilters} disabled={!search && !region}>Effacer les filtres</button>
          </div>
          <div className="directory-toolbar">
            <p role="status" aria-live="polite" aria-atomic="true"><strong>{resultCount}</strong> destination{resultCount > 1 ? "s" : ""} disponible{resultCount > 1 ? "s" : ""}</p>
            <a className="directory-download" download href="/data/destinations-ski.json"><Download size={16} aria-hidden="true" /> Télécharger les options JSON</a>
          </div>
          <div className="directory-layout">
            <aside className="preparation-panel" aria-labelledby="preparation-heading" id="preparer-transfert">
              <p className="panel-eyebrow">Votre prochain trajet</p>
              <h2 id="preparation-heading">Préparer votre transfert</h2>
              <label className="app-field" htmlFor="transfer-origin"><span>Lieu de départ</span><div><select id="transfer-origin" value={originId} onChange={(event) => setOriginId(event.target.value)}>{skiOptions.origins.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></div></label>
              <label className="app-field" htmlFor="transfer-destination"><span>Destination</span><div><select id="transfer-destination" value={destinationId} onChange={(event) => selectDestination(event.target.value)}><option value="">Choisir une destination</option>{destinationGroups.map((group) => <optgroup key={group.id} label={group.label}>{group.destinations.map((destination) => <option key={destination.id} value={destination.id}>{destination.label}</option>)}</optgroup>)}</select></div></label>
              {selected?.sectors?.length > 0 && <label className="app-field" htmlFor="transfer-sector"><span>Secteur ou quartier (facultatif)</span><div><select id="transfer-sector" value={sector} onChange={(event) => setSector(event.target.value)}><option value="">À préciser lors de la réservation</option>{selected.sectors.map((item) => <option key={item} value={item}>{item}</option>)}</select></div></label>}
              <p className="selection-status" role="status" aria-live="polite" aria-atomic="true">{selected ? `Destination choisie : ${selected.label}${sector ? ` · ${sector}` : ""}.` : "Choisissez une destination dans la liste ou le répertoire."}</p>
              {selected ? <Link className="app-primary booking-link" href={{ pathname: "/reserver-en-ligne", query: { depart: origin.label, destination: `${selected.label}${sector ? ` — ${sector}` : ""}` } }}>Continuer la réservation <ArrowRight size={18} aria-hidden="true" /></Link> : <button type="button" className="app-primary booking-link" disabled>Choisissez une destination</button>}
              <p className="preparation-note">Le prix est confirmé avant réservation, selon votre itinéraire et les conditions de prise en charge.</p>
            </aside>
            <div className="directory-results">
              {filteredGroups.length ? filteredGroups.map((group) => (
                <section key={group.id} className="destination-group" aria-labelledby={`group-${group.id}`}>
                  <div className="group-heading"><h2 id={`group-${group.id}`}>{group.label}</h2><span>{group.destinations.length}</span></div>
                  <ul className="destination-list">
                    {group.destinations.map((destination) => {
                      const isSelected = destination.id === destinationId;
                      const sectors = destination.sectors || [];
                      return <li key={destination.id} className={isSelected ? "destination-row is-selected" : "destination-row"}>
                        <div className="destination-content">
                          <h3>{destination.label}</h3>
                          <p className="destination-meta">{typeLabels[destination.type] || destination.type}{destination.country === "CH" ? " · Suisse" : ""}{destination.area ? ` · ${destination.area}` : ""}</p>
                          {sectors.length > 0 && <details className="destination-sectors"><summary>{sectors.length} secteur{sectors.length > 1 ? "s" : ""}</summary><ul>{sectors.map((item) => <li key={item}>{item}</li>)}</ul></details>}
                          {isSelected && <a href="#preparer-transfert" className="selection-link">Préparer ce transfert <ArrowRight size={14} aria-hidden="true" /></a>}
                        </div>
                        <button type="button" className="choose-destination" aria-label={`${isSelected ? "Destination sélectionnée" : "Choisir"} : ${destination.label}`} aria-pressed={isSelected} onClick={() => selectDestination(destination.id)}>{isSelected && <Check size={15} aria-hidden="true" />}{isSelected ? "Choisi" : "Choisir"}</button>
                      </li>;
                    })}
                  </ul>
                </section>
              )) : <div className="directory-empty"><MapPin size={28} aria-hidden="true" /><h2>Aucune destination trouvée</h2><p>Essayez un autre nom de station ou de secteur, ou élargissez votre recherche.</p><button type="button" className="app-secondary" onClick={resetFilters}>Afficher toutes les destinations</button></div>}
            </div>
          </div>
        </section>
      </AppShell>
      <style jsx>{`
        .directory-breadcrumb { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; font-size: 13px; color: #666; padding-top: 28px; }
        .directory-breadcrumb :global(a) { display: inline-flex; align-items: center; gap: 7px; color: #262626; }
        .directory-filters { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto; gap: 18px; align-items: end; }
        .directory-filters .app-field { margin-bottom: 0; }
        .filter-reset { min-height: 52px; }
        .filter-reset:disabled { opacity: .5; cursor: default; }
        .directory-toolbar { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px; padding: 22px 0 28px; color: #666; }
        .directory-download { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; text-decoration: underline; text-underline-offset: 4px; }
        .directory-layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(290px, 360px); align-items: start; gap: 28px; }
        .directory-results { grid-column: 1; grid-row: 1; min-width: 0; }
        .preparation-panel { grid-column: 2; grid-row: 1; min-width: 0; position: sticky; top: 100px; background: #fff; border: 1px solid #e5e5e5; border-radius: 16px; padding: 26px; }
        .panel-eyebrow { font-size: 11px !important; font-weight: 600; letter-spacing: .15em; text-transform: uppercase; color: #737373; margin-bottom: 12px; }
        .preparation-panel h2 { font-size: 22px; font-weight: 600; letter-spacing: -.025em; margin-bottom: 24px; }
        .booking-link { width: 100%; }
        .booking-link:disabled { opacity: .5; cursor: not-allowed; }
        .booking-link:disabled:hover { transform: none; }
        .selection-status { font-size: 13px !important; line-height: 1.6; color: #525252; margin: 18px 0; overflow-wrap: anywhere; }
        .preparation-note { font-size: 12px !important; line-height: 1.6; color: #737373; margin-top: 15px; }
        .destination-group { margin-bottom: 30px; background: #fff; border: 1px solid #e5e5e5; border-radius: 16px; overflow: hidden; }
        .group-heading { padding: 22px 24px; display: flex; align-items: center; justify-content: space-between; gap: 14px; border-bottom: 1px solid #e5e5e5; }
        .group-heading h2 { font-size: 21px; font-weight: 600; letter-spacing: -.025em; }
        .group-heading > span { font-size: 12px; color: #666; border: 1px solid #e5e5e5; border-radius: 20px; padding: 3px 9px; flex-shrink: 0; }
        .destination-list, .destination-sectors ul { list-style: none; margin: 0; padding: 0; }
        .destination-row { display: flex; justify-content: space-between; gap: 16px; padding: 20px 24px; border-bottom: 1px solid #ededed; align-items: start; }
        .destination-row:last-child { border-bottom: 0; }
        .destination-row.is-selected { background: #fffcf0; }
        .destination-content { min-width: 0; overflow-wrap: anywhere; }
        .destination-content h3 { font-size: 16px; font-weight: 600; line-height: 1.5; text-transform: none; }
        .destination-meta { font-size: 12px !important; color: #737373; margin-top: 4px; line-height: 1.6; }
        .destination-sectors { font-size: 13px; line-height: 1.7; color: #525252; margin-top: 9px; }
        .destination-sectors summary { cursor: pointer; padding: 10px 0; min-height: 44px; }
        .destination-sectors ul { margin-top: 6px; padding-left: 15px; border-left: 2px solid #e5e5e5; }
        .destination-sectors li + li { margin-top: 4px; }
        .choose-destination { display: inline-flex; align-items: center; justify-content: center; gap: 5px; flex-shrink: 0; min-height: 44px; border: 1px solid #d4d4d4; border-radius: 9px; background: #fff; padding: 9px 13px; font-size: 13px; font-weight: 600; }
        .choose-destination:hover { background: #f5f5f5; }
        .choose-destination[aria-pressed="true"] { border-color: #a16207; }
        .selection-link { display: inline-flex; align-items: center; gap: 5px; margin-top: 8px; padding: 5px 0; font-size: 12px; text-decoration: underline; text-underline-offset: 3px; }
        .directory-empty { background: #fff; border: 1px solid #e5e5e5; border-radius: 16px; padding: 36px 24px; }
        .directory-empty h2 { margin: 16px 0 10px; font-size: 22px; font-weight: 600; }
        .directory-empty p { color: #666; line-height: 1.7; margin-bottom: 24px; }
        button:focus-visible, a:focus-visible, summary:focus-visible { outline: 2px solid #a16207; outline-offset: 4px; }
        @media (max-width: 1023px) {
          .directory-filters { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
          .filter-reset { grid-column: 1 / -1; justify-self: start; }
          .directory-layout { grid-template-columns: minmax(0, 1fr); }
          .preparation-panel { grid-column: 1; grid-row: 1; position: static; }
          .directory-results { grid-column: 1; grid-row: 2; }
        }
        @media (max-width: 599px) {
          .directory-filters { grid-template-columns: minmax(0, 1fr); }
          .filter-reset { justify-self: stretch; }
          .preparation-panel, .group-heading, .destination-row { padding: 20px; }
          .destination-row { gap: 10px; }
          .choose-destination { padding: 9px 10px; }
          .group-heading h2 { font-size: 19px; }
        }
      `}</style>
    </>
  );
}
