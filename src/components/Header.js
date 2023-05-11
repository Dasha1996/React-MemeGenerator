import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
        <div className="header--logo-container">
        <img src={logo} alt="Meme logo"></img>
        <h1 className='header--title'>Meme Generator</h1>
        </div>
        <p>React and SCASS project</p>
    </header>
  )
}

export default Header;