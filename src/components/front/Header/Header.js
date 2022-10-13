import React from 'react'
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
      <div>
        <h1>
          <Link to="/" className='logo'>
            Electronics Shop
            </Link>
        </h1>
      </div>
    </header>
  )

  
  
};

export default Header;