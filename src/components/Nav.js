import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="Nav">
      <nav>
        <ul className="nav-links">
          <Link to='/'>
            <li>Таблица</li>
          </Link>
          <Link to='/graph'>
            <li>Диаграммы</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
