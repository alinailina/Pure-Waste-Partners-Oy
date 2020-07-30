import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <h3>[Logo]</h3>
        </Link>
      </div>
      <div
        className={active ? "toggle active" : "toggle"}
        onClick={toggleActive}
      >
        <div className="hamburger"></div>
      </div>

      <ul className={active ? "active" : ""}>
        <Link to="about" onClick={toggleActive}>
          About
        </Link>
        <Link to="shop" onClick={toggleActive}>
          Shop
        </Link>
        <Link to="events" onClick={toggleActive}>
          Events
        </Link>
        <Link to="blog" onClick={toggleActive}>
          Blog
        </Link>
        <Link to="contact" onClick={toggleActive}>
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
