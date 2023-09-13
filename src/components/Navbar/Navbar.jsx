import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (windowWidth < 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <button
        className={`hamburger-button ${menuOpen ? 'open' : ''}`}
        aria-label="Abrir menú"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
      </button>
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
      <img
          src="https://static-or02.inbenta.com/d033b6f9d7e41e9d5d95da36a1e5fba2480a55cfec186013688ce6b431018af9/claro-logo.png"
          alt="Claro Logo"
          className="claro-logo"
        />
        <li className="nav-item">
          <Link to="/servicios">Servicios</Link>
        </li>
        <li className="nav-item">
          <Link to="/tienda">Tienda</Link>
        </li>
        <li className="nav-item">
          <Link to="/pack-ya">Pack Ya</Link>
        </li>
        <li className="nav-item">
          <Link to="/pasate-a-claro">Pásate a Claro</Link>
        </li>
        <li className="nav-item">
          <Link to="/ayuda">Ayuda</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
