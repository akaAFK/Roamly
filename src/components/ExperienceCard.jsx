import { ArrowUpRight, Clock3, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <div className="experience-image"><img src={experience.image} alt={experience.title} loading="lazy" onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.classList.add('image-fallback'); }} /><span className="experience-category">{experience.category}</span></div>
      <div className="experience-copy"><h3>{experience.title}</h3><p>{experience.description}</p><div className="experience-meta"><span><MapPin size={14} />{experience.location}</span><span><Clock3 size={14} />{experience.duration}</span></div><div className="experience-bottom"><strong>from ${experience.price} <small>/ person</small></strong><Link to={`/planner?experience=${encodeURIComponent(experience.title)}`} className="round-arrow" aria-label={`Plan ${experience.title}`}><ArrowUpRight size={18} /></Link></div></div>
    </article>
  );
}
