import { Heart, ArrowUpRight, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DestinationCard({ destination, isFavorite, onToggleFavorite, compact = false }) {
  return (
    <article className={`destination-card ${compact ? 'destination-card-compact' : ''}`}>
      <div className="destination-image-wrap">
        <img src={destination.image} alt={destination.imageAlt} loading="lazy" onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.classList.add('image-fallback'); }} />
        <span className="image-label">{destination.tag}</span>
        <button className={`save-button ${isFavorite ? 'saved' : ''}`} onClick={() => onToggleFavorite(destination.id)} aria-label={isFavorite ? `Remove ${destination.name} from saved` : `Save ${destination.name}`} aria-pressed={isFavorite}><Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} /></button>
        <span className="rating"><Star size={13} fill="currentColor" /> {destination.rating}</span>
      </div>
      <div className="destination-card-body">
        <div className="card-location"><MapPin size={14} /> {destination.country} <span className="location-dot">·</span> {destination.days}</div>
        <div className="destination-card-heading"><h3>{destination.name}</h3><span className="from-price">from <strong>${destination.price}</strong></span></div>
        <p>{destination.description}</p>
        <Link className="text-link" to={`/planner?destination=${encodeURIComponent(destination.name)}`}>Make it your trip <ArrowUpRight size={15} /></Link>
      </div>
    </article>
  );
}
