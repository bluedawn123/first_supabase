import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <h1 className="logo">
          <a href="/">Minimal Portfolio Theme</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <hr />     
      </header>
      <hr/>      
    </>  
  );
};

export default Header;
