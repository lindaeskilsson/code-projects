import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default function Header() {
  return (
    <header>
      {/* Link to the main content of each view */}
      <Link to="#main" className="skip-to-content">
        Hoppa till huvudinnehållet
      </Link>
      {/* Links to the start view */}
      <div>
        <Link to="/">
          <h2>Klimatkunskap</h2>
        </Link>
        <Link to="/">
          <img src="https://i.imgur.com/3NqGGsd.png"></img>
        </Link>
      </div>
      {/* Links for the main navigation */}
      <nav>
        <NavLink to="/temperaturer" activeClassName="active">
          <p>Temperaturer</p>
        </NavLink>
        <NavLink to="/glaciarer" activeClassName="active">
          <p>Glaciärer</p>
        </NavLink>
        <NavLink to="/utslapp" activeClassName="active">
          <p>Utsläpp</p>
        </NavLink>
        <NavLink to="/havet" activeClassName="active">
          <p>Havet</p>
        </NavLink>
      </nav>
    </header>
  );
}
