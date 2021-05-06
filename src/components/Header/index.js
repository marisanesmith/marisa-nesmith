import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
            <body className="color">
            <nav className="navbar navbar-expand-lg p-3 navbar-light">
            <NavLink className="nav-link name" to="/"> Marisa NeSmith </NavLink>            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact"> Contact </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/portfolio"> Portfolio </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/"> About </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="photography.html"> Photography </a>
          </li>
        </ul>
      </div>
    </nav>
    </body>
</div>
        
    )
}

export default Header