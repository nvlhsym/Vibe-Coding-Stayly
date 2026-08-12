import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header({ transparent = false }) {
  const [theme, setTheme] = useState('light');
  const location = useLocation();
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className={`header ${transparent ? 'landing-header' : ''}`}>
      <Link to="/" className="logo">
        <div className="logo-icon">s</div>
        <span className="logo-text">stayly</span>
      </Link>
      <nav className="main-nav">
        <Link to="/stays" className={`nav-link ${isActive('/stays') || isActive('/')}`}>Stays</Link>
        <Link to="/experiences" className={`nav-link ${isActive('/experiences')}`}>Experiences</Link>
        <Link to="/trip-planner" className={`nav-link ${isActive('/trip-planner')}`}>Trip planner</Link>
        <Link to="#" className="nav-link">Host</Link>
      </nav>
      <div className="header-actions">
        <button className="icon-button" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          )}
        </button>
        <Link to="/login" className="sign-in-btn">
          Sign in
          <div className="avatar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
        </Link>
      </div>
    </header>
  );
}
