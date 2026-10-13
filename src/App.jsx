import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Destinations from './pages/Destinations.jsx';
import Experiences from './pages/Experiences.jsx';
import Planner from './pages/Planner.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

function readSaved() {
  try { return JSON.parse(localStorage.getItem('roamly-saved') || '[]'); }
  catch { return []; }
}

export default function App() {
  const [favorites, setFavorites] = useState(readSaved);
  useEffect(() => { localStorage.setItem('roamly-saved', JSON.stringify(favorites)); }, [favorites]);
  const toggleFavorite = id => setFavorites(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  const shared = { favorites, toggleFavorite };
  return (
    <Routes>
      <Route element={<Layout favoriteCount={favorites.length} />}>
        <Route path="/" element={<Home {...shared} />} />
        <Route path="/destinations" element={<Destinations {...shared} />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}
