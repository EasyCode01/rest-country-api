import React, { useEffect, useState } from "react";

const Navbar = ({ handleThemeMode, isLight, setVisible, visible }) => {
  const navTitle = "Where in the Word?";
  return (
    <nav
      className={`${visible ? "navbar--visible" : "navbar"} ${
        isLight ? "light-mode" : "dark-mode"
      }`}
    >
      <div className="navbar__content container">
        <h3 className="navbar__logo">{navTitle}</h3>
        <div className="navbar__mode">
          {isLight ? (
            <span className="nav__mode" onClick={handleThemeMode}>
              <iconify-icon icon="ion:moon-outline"></iconify-icon> Dark mode
            </span>
          ) : (
            <span className="nav__mode" onClick={handleThemeMode}>
              <iconify-icon icon="bi:sun-fill"></iconify-icon> Light mode
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
