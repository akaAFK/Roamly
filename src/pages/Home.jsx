import { useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Compass, MoveUpRight, Search, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { destinations, travelTips } from '../data/destinations.js';

export default function Home({ favorites, toggleFavorite }) {
  const [query, setQuery] = useState('');
  const [tripMood, setTripMood] = useState('Any mood');
  const navigate = useNavigate();
  function submitSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (tripMood !== 'Any mood') params.set('type', tripMood);
    navigate(`/destinations${params.toString() ? `?${params}` : ''}`);
  }
  return (
    <>
      <section className="hero-section">
        <div className="hero-image" role="img" aria-label="Expansive mountain landscape at sunrise" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="hero-kicker"><span className="kicker-line" /> LESS SCROLLING. MORE GOING.</div>
          <h1>Your next story<br />starts <span>somewhere.</span></h1>
          <p className="hero-lead">Find places that feel like you. From a quick city escape to the long way around.</p>
          <form className="hero-search" onSubmit={submitSearch}>
            <label className="search-field"><Search size={18} /><span className="visually-hidden">Search destinations</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Where do you want to go?" /></label>
            <label className="mood-select"><Compass size={17} /><span className="visually-hidden">Travel style</span><select value={tripMood} onChange={e => setTripMood(e.target.value)}><option>Any mood</option><option>Mountains</option><option>Culture</option><option>Beach</option><option>City break</option></select></label>
            <button type="submit" className="button button-primary search-submit">Find a place <ArrowUpRight size={17} /></button>
          </form>
          <div className="hero-footnote"><span>01 / FIND YOUR PLACE</span><span className="hero-scroll">SCROLL TO EXPLORE <ArrowDownRight size={15} /></span></div>
        </div>
        <div className="hero-side-note">GO A LITTLE FURTHER — ROAMLY 2026</div>
      </section>

      <section className="trust-strip"><div className="container trust-inner"><span>MADE FOR THE CURIOUS</span><div><Sparkles size={16} /> Small plans. Big memories.</div><span>YOUR PACE, YOUR PLACE.</span></div></section>

      <section className="section-block container" id="destinations">
        <SectionTitle kicker="THE SHORTLIST" title={<>Places worth<br className="desktop-break" /> leaving home for<span className="red-dot">.</span></>} description="A few good places to get your imagination moving." action={<Link to="/destinations" className="button button-outline">All destinations <ArrowUpRight size={16} /></Link>} />
        <div className="destination-grid home-destination-grid">
          {destinations.slice(0, 3).map(destination => <DestinationCard key={destination.id} destination={destination} isFavorite={favorites.includes(destination.id)} onToggleFavorite={toggleFavorite} />)}
        </div>
      </section>

      <section className="manifesto-section">
        <div className="container manifesto-grid">
          <div className="manifesto-image"><img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85" alt="A lake surrounded by mountains" loading="lazy" /><span className="image-index">FIG. 01 / TAKE THE SCENIC ROUTE</span></div>
          <div className="manifesto-copy"><span className="eyebrow">TRAVEL, YOUR WAY</span><h2>Not a checklist.<br />A <em>feeling.</em></h2><p>Roamly helps you get past the endless tabs and into the good part: finding somewhere that fits your mood, your budget and your version of an adventure.</p><Link to="/about" className="text-link">What Roamly is about <ArrowUpRight size={16} /></Link><div className="manifesto-stamp"><Compass size={28} /><span>FOLLOW<br />YOUR<br />CURIOSITY</span></div></div>
        </div>
      </section>

      <section className="section-block container">
        <SectionTitle kicker="PICK YOUR PACE" title="There’s more than one way to get away." description="Start with the feeling. We’ll help with the first step." />
        <div className="mood-grid">
          {[{name:'Find the wild',type:'Mountains',n:'01',img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85'},{name:'Get lost in a city',type:'City break',n:'02',img:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=85'},{name:'Slow things down',type:'Beach',n:'03',img:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85'}].map(mood => <Link to={`/destinations?type=${encodeURIComponent(mood.type)}`} className="mood-card" key={mood.n}><img src={mood.img} alt="" loading="lazy" /><div className="mood-overlay" /><span className="mood-number">/{mood.n}</span><div className="mood-bottom"><h3>{mood.name}</h3><span><ArrowUpRight size={19} /></span></div></Link>)}
        </div>
      </section>

      <section className="tip-section"><div className="container tip-inner"><div className="tip-intro"><span className="eyebrow">A BETTER WAY TO WANDER</span><h2>Less planning<br />panic. More <em>possibility.</em></h2></div><div className="tip-list">{travelTips.map(tip => <div className="tip-row" key={tip.number}><span>{tip.number}</span><div><h3>{tip.title}</h3><p>{tip.text}</p></div><MoveUpRight size={17} /></div>)}<Link to="/planner" className="button button-primary">Build a simple plan <ArrowRight size={16} /></Link></div></div></section>

      <section className="closing-cta container"><div><span className="eyebrow">THE WORLD IS STILL OUT THERE</span><h2>Ready when<br />you are<span className="red-dot">.</span></h2></div><Link to="/planner" className="closing-circle">LET'S<br />GO <ArrowUpRight size={23} /></Link></section>
    </>
  );
}
