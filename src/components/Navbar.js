import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

class Navbar extends React.Component {
  render() {
    const navTexts = ['Home', 'Work', 'About'];
    return (
      <nav className='nav'>
        <ul>
          {navTexts.map((navText) => {
            const path = navText === 'Home' ? '/' : `/${navText.toLowerCase()}`;
            return (
              <li key={navText.toLocaleLowerCase()} className='nav__menu'>
                <Link to={path}>{navText}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
