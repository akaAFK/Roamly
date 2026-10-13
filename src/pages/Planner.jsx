import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Check, Compass, MapPin, RotateCcw, Sparkles } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { destinations, experiences } from '../data/destinations.js';

const dailyRates = { Budget: 45, Balanced: 90, Comfort: 160 };
export default function Planner() {
  const [params] = useSearchParams();
  const [destination, setDestination] = useState(params.get('destination') || destinations[0].name);
  const [days, setDays] = useState(4);
  const [travelStyle, setTravelStyle] = useState('Balanced');
  const [travelers, setTravelers] = useState(1);
  const [interests, setInterests] = useState(['Nature']);
  const [created, setCreated] = useState(false);
  useEffect(() => {
    if (params.get('destination')) setDestination(params.get('destination'));
    const requestedExperience = params.get('experience');
    if (requestedExperience) {
      const experience = experiences.find(item => item.title === requestedExperience);
      if (experience) setInterests(current => current.includes(experience.category) ? current : [...current, experience.category]);
    }
  }, [params]);
  const currentDestination = destinations.find(item => item.name === destination) || destinations[0];
  const estimate = useMemo(() => (dailyRates[travelStyle] * days * travelers) + currentDestination.price, [travelStyle, days, travelers, currentDestination]);
  const toggleInterest = item => { setInterests(old => old.includes(item) ? old.filter(x => x !== item) : [...old, item]); setCreated(false); };
  const resetForm = () => { setDestination(destinations[0].name); setDays(4); setTravelStyle('Balanced'); setTravelers(1); setInterests(['Nature']); setCreated(false); };
  function submit(e) { e.preventDefault(); setCreated(true); }
  return <div className="page-shell planner-page">
    <section className="page-hero container planner-intro"><div><span className="eyebrow">A PLAN, NOT A PRESSURE</span><h1>Make a little<br /><em>room to roam.</em></h1><p>Tell us what you're picturing. We'll turn it into a simple starting point, not a strict itinerary.</p></div><div className="planner-orbit"><div className="orbit-ring orbit-ring-1"/><div className="orbit-ring orbit-ring-2"/><div className="orbit-center"><Compass size={44}/></div><span className="orbit-label orbit-label-a">YOUR PACE</span><span className="orbit-label orbit-label-b">YOUR PLACE</span></div></section>
    <section className="container planner-layout"><form className="planner-form" onSubmit={submit}>
      <div className="form-section"><div className="form-heading"><span>01</span><div><h2>Where to?</h2><p>Pick the place calling your name.</p></div></div><label className="full-label">DESTINATION<select value={destination} onChange={e => { setDestination(e.target.value); setCreated(false); }}>{destinations.map(item => <option key={item.id} value={item.name}>{item.name} — {item.country}</option>)}</select></label><div className="selected-place"><img src={currentDestination.image} alt=""/><div><strong>{currentDestination.name}</strong><span><MapPin size={13}/>{currentDestination.country} · {currentDestination.days}</span></div><span className="place-tag">{currentDestination.type}</span></div></div>
      <div className="form-section"><div className="form-heading"><span>02</span><div><h2>What's the rhythm?</h2><p>Make the trip fit your life.</p></div></div><div className="two-fields"><label className="full-label">HOW MANY DAYS?<div className="stepper"><button type="button" onClick={() => { setDays(v => Math.max(1, v - 1)); setCreated(false); }} aria-label="Reduce trip length">−</button><strong>{days} <small>{days === 1 ? 'day' : 'days'}</small></strong><button type="button" onClick={() => { setDays(v => Math.min(30, v + 1)); setCreated(false); }} aria-label="Increase trip length">+</button></div></label><label className="full-label">TRAVELLERS<select value={travelers} onChange={e => { setTravelers(Number(e.target.value)); setCreated(false); }}>{[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'traveller' : 'travellers'}</option>)}</select></label></div><div className="full-label style-label">YOUR TRAVEL STYLE<div className="style-options">{Object.keys(dailyRates).map(style => <button type="button" className={`style-option ${travelStyle === style ? 'active' : ''}`} key={style} onClick={() => { setTravelStyle(style); setCreated(false); }}><span>{style}</span><small>{style === 'Budget' ? 'Keep it simple' : style === 'Balanced' ? 'A bit of both' : 'Room to splurge'}</small></button>)}</div></div></div>
      <div className="form-section"><div className="form-heading"><span>03</span><div><h2>What feels like you?</h2><p>Pick as many as you like.</p></div></div><div className="interest-options">{['Nature','Culture','Food','Water','Slow travel','Adventure'].map(item => <button type="button" key={item} onClick={() => toggleInterest(item)} className={`interest-option ${interests.includes(item) ? 'active' : ''}`}>{interests.includes(item) && <Check size={14}/>} {item}</button>)}</div></div>
      <button className="button button-primary planner-submit" type="submit">Create my starting plan <ArrowRight size={17}/></button><button type="button" className="reset-button" onClick={resetForm}><RotateCcw size={14}/> Reset preferences</button>
    </form>
    <aside className="planner-summary"><div className="summary-top"><span className="eyebrow">YOUR ROAMLY SNAPSHOT</span><span className="summary-icon"><Sparkles size={19}/></span></div><h2>{created ? 'Your next story.' : 'A trip that feels like you.'}</h2><p className="summary-desc">{created ? 'Here’s a first draft to help you start imagining the details.' : 'Your plan will take shape here. Start with a place, then make it yours.'}</p><div className="summary-image"><img src={currentDestination.image} alt={currentDestination.imageAlt}/><div><span>{currentDestination.country}</span><strong>{currentDestination.name}</strong></div></div><div className="summary-stats"><div><span>DURATION</span><strong>{days} {days === 1 ? 'day' : 'days'}</strong></div><div><span>TRAVELLERS</span><strong>{travelers}</strong></div><div><span>TRAVEL STYLE</span><strong>{travelStyle}</strong></div></div><div className="estimate-block"><span>ROUGH BUDGET ESTIMATE</span><strong>${estimate.toLocaleString('en-US')}</strong><small>USD · {travelers > 1 ? 'for your group' : 'for one person'} · mock estimate</small></div>{created && <div className="plan-confirmation"><Check size={17}/><div><strong>Your starting plan is ready.</strong><p>Interests: {interests.length ? interests.join(', ') : 'Open to anything'}. Adjust the details whenever you like.</p></div></div>}<p className="estimate-note">Planning demo only. Prices are illustrative mock data, not live quotes or bookings.</p><Link to="/destinations" className="text-link">Explore more places <ArrowRight size={15}/></Link></aside></section>
    <section className="container planner-bottom"><span className="eyebrow">NEED A LITTLE INSPIRATION?</span><p>Try a different direction before you decide.</p><div>{destinations.filter(item => item.name !== currentDestination.name).slice(0,3).map(item => <button key={item.id} onClick={() => { setDestination(item.name); setCreated(false); window.scrollTo({top:0,behavior:'smooth'}); }}><span>{item.name}</span><ArrowRight size={14}/></button>)}</div></section>
  </div>;
}
