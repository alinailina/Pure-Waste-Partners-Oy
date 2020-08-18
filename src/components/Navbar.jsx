import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav>
      <div className="nav-logo">
        <NavLink to="/">
          <h3>FabRevizion</h3>
        </NavLink>
      </div>
      <div
        className={active ? "toggle active" : "toggle"}
        onClick={toggleActive}
      >
        <div className="hamburger"></div>
      </div>

      <ul className={active ? "active" : ""}>
        <NavLink
          to="about"
          onClick={toggleActive}
          activeClassName="navlink-active"
        >
          О нас
        </NavLink>
        <NavLink
          to="shop"
          onClick={toggleActive}
          activeClassName="navlink-active"
        >
          Магазин
        </NavLink>
        <NavLink
          to="events"
          onClick={toggleActive}
          activeClassName="navlink-active"
        >
          События
        </NavLink>
        <NavLink
          to="blog"
          onClick={toggleActive}
          activeClassName="navlink-active"
        >
          Новости
        </NavLink>
        <NavLink
          to="contact"
          onClick={toggleActive}
          activeClassName="navlink-active"
        >
          Контакты
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
