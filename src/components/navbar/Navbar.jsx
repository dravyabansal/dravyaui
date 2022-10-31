import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="SHs__navbar">
      <div className="SHs__navbar-links">
        <h1 className="SHs__navbar-links_logo">
          The SHs
        </h1>
        <div className="SHs__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wSHs">The SHs?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="SHs__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="SHs__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="SHs__navbar-menu_container scale-up-center">
          <div className="SHs__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wSHs">he SHs?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="SHs__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
