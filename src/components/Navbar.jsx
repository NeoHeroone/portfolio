import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/" className='nav-link'>Asosiy</Link>
      <Link to="/men-haqimda" className='nav-link'>Men haqimda</Link>
      <Link to="/aloqa" className='nav-link'>Aloqa</Link>
    </nav>
  );
}

export default Navbar;