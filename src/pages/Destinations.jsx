import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, SlidersHorizontal, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard.jsx';
import { destinations } from '../data/destinations.js';

const types = ['All styles', 'Mountains', 'Culture', 'City break', 'Beach'];
const regions = ['Everywhere', 'Asia', 'Europe', 'Africa'];

export default function Destinations({ favorites, toggleFavorite }) {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get('q') || '');
  const [type, setType] = useState(params.get('type') || 'All styles');
  const [region, setRegion] = useState('Everywhere');
  const savedOnly = params.get('filter') === 'saved';
  const filtered = useMemo(() => destinations.filter(item => {
    const term = search.toLowerCase().trim();
    const matchesSearch = !term || `${item.name} ${item.country} ${item.description} ${item.type}`.toLowerCase().includes(term);
    const matchesType = type === 'All styles' || item.type === type;
    const matchesRegion = region === 'Everywhere' || item.region === region;
    const matchesSaved = !savedOnly || favorites.includes(item.id);
    return matchesSearch && matchesType && matchesRegion && matchesSaved;
  }), [search, type, region, savedOnly, favorites]);
  function clearFilters() { setSearch(''); setType('All styles'); setRegion('Everywhere'); setParams({}); }
  return (
    <div className="page-shell">
      <section className="page-hero container destinations-page-hero"><div><span className="eyebrow">THE WORLD, OPEN-ENDED</span><h1>{savedOnly ? <>Your saved<br /><em>places.</em></> : <>Find your<br /><em>somewhere.</em></>}</h1><p>Big landscapes, small streets, places to pause and places to feel alive.</p></div><div className="page-hero-side"><span className="big-index">{String(filtered.length).padStart(2, '0')}</span><span>PLACES TO<br />START FROM</span></div></section>
      <section className="container destination-browser">
        <div className="filter-bar"><label className="browser-search"><Search size={18} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search a city, country or mood..." aria-label="Search destinations" /></label><label className="filter-select"><SlidersHorizontal size={16} /><span className="visually-hidden">Travel style filter</span><select value={type} onChange={e => setType(e.target.value)}>{types.map(item => <option key={item}>{item}</option>)}</select></label><label className="filter-select region-select"><span className="visually-hidden">Region filter</span><select value={region} onChange={e => setRegion(e.target.value)}>{regions.map(item => <option key={item}>{item}</option>)}</select></label></div>
        <div className="results-line"><span>{savedOnly ? 'YOUR PERSONAL SHORTLIST' : 'THE ROAMLY SHORTLIST'} <span className="results-count">/ {filtered.length} {filtered.length === 1 ? 'PLACE' : 'PLACES'}</span></span><button className="clear-filters" onClick={clearFilters}><X size={14} /> Clear filters</button></div>
        {filtered.length ? <div className="destination-grid browser-grid">{filtered.map(destination => <DestinationCard key={destination.id} destination={destination} isFavorite={favorites.includes(destination.id)} onToggleFavorite={toggleFavorite} />)}</div> : <div className="empty-state"><span className="empty-icon">⌁</span><h2>No places found.</h2><p>Try a different search or reset the filters to see the full shortlist.</p><button className="button button-primary" onClick={clearFilters}>Show all destinations <ArrowUpRight size={16} /></button></div>}
      </section>
      <section className="quiet-banner"><div className="container quiet-banner-inner"><span className="eyebrow">GOOD TRIPS START WITH A QUESTION</span><p>What would you like your next few days to feel like?</p><Link to="/planner" className="text-link">Let's figure it out <ArrowUpRight size={16} /></Link></div></section>
    </div>
  );
}
