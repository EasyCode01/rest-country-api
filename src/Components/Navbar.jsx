import React from "react";

const Navbar = ({ handleThemeMode, isLight }) => {
  const navTitle = "Where in the Word?";
  return (
    <div className={`navbar ${isLight ? "light-mode" : "dark-mode"}`}>
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
    </div>
  );
};

export default Navbar;
