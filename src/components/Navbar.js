import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="logo-drop">💧</span>
          <span className="logo-text">
            Ashwini <span>Water Solutions</span>
          </span>
        </Link>

        <nav className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {['/', '/about', '/brands', '/contact'].map((path, i) => {
            const labels = ['Home', 'About', 'Brands', 'Contact'];
            return (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMenu}
              >
                {labels[i]}
              </NavLink>
            );
          })}
          <Link to="/contact" className="btn btn-primary navbar__cta" onClick={closeMenu}>
            Get Quote
          </Link>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
