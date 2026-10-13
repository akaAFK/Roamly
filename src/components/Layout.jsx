import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout({ favoriteCount }) {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [location.pathname, location.search]);
  return <><Header favoriteCount={favoriteCount} /><main><Outlet /></main><Footer /></>;
}
