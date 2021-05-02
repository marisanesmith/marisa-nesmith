import React from 'react';
import './style.css';

function Header() {
    return (
        <div>
            <body className="color">
            <nav className="navbar navbar-expand-lg p-3 navbar-light">
            <a className="navbar-brand name" href="index.html">Marisa NeSmith</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="portfolio.html">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html"> About <span className="sr-only">(current)</span></a>
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