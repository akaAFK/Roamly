import { useMemo, useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import ExperienceCard from '../components/ExperienceCard.jsx';
import { experiences } from '../data/destinations.js';

const categories = ['All experiences', 'Nature', 'Food', 'Water', 'Culture'];
export default function Experiences() {
  const [active, setActive] = useState('All experiences');
  const items = useMemo(() => experiences.filter(item => active === 'All experiences' || item.category === active), [active]);
  return <div className="page-shell">
    <section className="experience-hero"><div className="container experience-hero-inner"><div><span className="eyebrow">DON'T JUST SEE IT. FEEL IT.</span><h1>Make room for<br /><em>the unexpected.</em></h1><p>Little detours can become the best part of a trip. Start with something that sparks your curiosity.</p><Link to="/planner" className="button button-primary">Find your kind of trip <ArrowUpRight size={16} /></Link></div><div className="experience-hero-art"><img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1100&q=85" alt="Wild deer in a sunlit forest"/><span className="art-sticker"><Sparkles size={17}/> TAKE THE<br/>SIDE ROAD</span></div></div></section>
    <section className="section-block container experience-browser"><SectionTitle kicker="COLLECT MOMENTS, NOT JUST MILES" title="Experiences that stay with you." description="A few ideas for making a place feel a little more personal." /><div className="category-pills" role="group" aria-label="Filter experiences">{categories.map(category => <button key={category} className={`category-pill ${active === category ? 'selected' : ''}`} onClick={() => setActive(category)}>{category}</button>)}</div><div className="experience-grid">{items.map(item => <ExperienceCard key={item.id} experience={item}/>)}</div></section>
    <section className="experience-note"><div className="container experience-note-inner"><span className="eyebrow">FOLLOW A DIFFERENT MAP</span><h2>Somewhere between<br />the plan and the <em>detour.</em></h2><Link to="/destinations" className="text-link">Find a destination first <ArrowUpRight size={16}/></Link></div></section>
  </div>;
}
