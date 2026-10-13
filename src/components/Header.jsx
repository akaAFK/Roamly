import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Heart, ArrowUpRight } from 'lucide-react';
import Logo from './Logo.jsx';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/destinations', label: 'Destinations' },
  { to: '/experiences', label: 'Experiences' },
  { to: '/planner', label: 'Trip planner' },
  { to: '/about', label: 'About' }
];

export default function Header({ favoriteCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Logo />
        <button className="mobile-menu-toggle icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map(link => <NavLink key={link.to} to={link.to} end={link.end} onClick={closeMenu} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{link.label}</NavLink>)}
          <Link to="/planner" onClick={closeMenu} className="nav-cta">Plan a trip <ArrowUpRight size={16} /></Link>
        </nav>
        <Link to="/destinations?filter=saved" className="favorites-link" aria-label={`${favoriteCount} saved destinations`}>
          <Heart size={17} /> <span>Saved</span><span className="saved-count">{favoriteCount}</span>
        </Link>
      </div>
    </header>
  );
}
