import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <body className="color">
            <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="nav-link name" to="/"> Marisa NeSmith </Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/contact"> Contact </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/portfolio"> Portfolio </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/"> About </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/photography"> Photography </Link>
          </li>
        </ul>
      </div>
    </nav>
    </body>
</div>
        
    )
}

export default Header