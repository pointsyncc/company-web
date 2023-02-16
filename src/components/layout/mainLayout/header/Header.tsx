import React from "react";

export const Header = () => {
  return (
    <header className="header__area">
      <div className="header__inner">
        <div className="header__logo">
          <a href="index.html">
            <img
              className="logo-primary"
              src="/imgs/logo/site-logo-white.png"
              alt="Site Logo"
            />
            <img
              className="logo-secondary"
              src="/imgs/logo/site-logo-white-2.png"
              alt="Moibile Logo"
            />
          </a>
        </div>
        <div className="header__nav-icon">
          <button id="open_offcanvas">
            <img src="/imgs/icon/menu-white.png" alt="Menubar Icon" />
          </button>
        </div>
        <div className="header__support">
          <p>
            Support center <a href="tel:+9587325902">+9 587 325 902</a>
          </p>
        </div>
      </div>
    </header>
  );
};
