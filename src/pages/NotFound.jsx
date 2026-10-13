import { ArrowLeft, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function NotFound() { return <section className="not-found container"><Compass size={40}/><span className="eyebrow">OFF THE MAP</span><h1>Looks like this<br/><em>path ends here.</em></h1><p>The page you’re looking for may have moved. Let's get you back to exploring.</p><Link className="button button-primary" to="/"><ArrowLeft size={16}/> Back home</Link></section>; }
