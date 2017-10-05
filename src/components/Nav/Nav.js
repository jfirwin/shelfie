import React from 'react';
import './nav.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

  const Nav = (props) => (
    <nav>
      <Link to='/'>
        <img src={logo} alt="Shelfie"/>
      </Link>
      <Link to='/'>
        <h1 >SHELFIE</h1>
      </Link>
    </nav>
  );

export default Nav;
