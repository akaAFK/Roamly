import { Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="brand" aria-label="Roamly home">
      <span className="brand-mark"><Compass size={21} strokeWidth={2.2} /></span>
      <span>roamly<span className="brand-dot">.</span></span>
    </Link>
  );
}
