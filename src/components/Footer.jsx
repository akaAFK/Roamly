import { ArrowUpRight, Instagram, Send } from 'lucide-react';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Logo />
          <p>Make room for the places<br />you haven't met yet.</p>
        </div>
        <div className="footer-note"><span className="eyebrow">A LITTLE REMINDER</span><p>The best trips aren't always the farthest ones.</p></div>
        <div className="footer-socials"><a href="https://www.instagram.com/_aka_afk_/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href="https://t.me/akaAFK" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={18} /></a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Roamly. Student frontend project.</span><a href="https://github.com/akaAFK/Roamly" target="_blank" rel="noreferrer">Made for curious minds <ArrowUpRight size={14} /></a></div>
    </footer>
  );
}
