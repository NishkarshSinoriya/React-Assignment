import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function Header({ setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">React Assignment</div>
        <ul className={`nav-items ${menuOpen ? 'open' : ''}`}>
          <li onClick={() => setActiveTab('One')}>One</li>
          <li onClick={() => setActiveTab('Two')}>Two</li>
          <li onClick={() => setActiveTab('Three')}>Three</li>
        </ul>
        <FaBars className="hamburger" onClick={() => setMenuOpen(!menuOpen)} />
      </nav>
    </header>
  );
}

export default Header;
