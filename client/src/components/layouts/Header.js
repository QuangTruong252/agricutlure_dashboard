import React from "react";
import '../css/Header.css';



const Header = () => {
  return (
      <header>
        <div className="menu-toggle">
          <label htmlFor="sidebar-toggle">
            <span className="las la-bars" />
          </label>
        </div>
        <div className="header-icons">
          <span className="las la-search" />
          <span className="las la-bookmark" />
          <span className="las la-sms" />
        </div>
      </header>
  );
};

export default Header;
