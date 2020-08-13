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
          <h3>FabRevizion</h3>
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
          О нас
        </Link>
        <Link to="shop" onClick={toggleActive}>
          Магазин
        </Link>
        <Link to="events" onClick={toggleActive}>
          События
        </Link>
        <Link to="blog" onClick={toggleActive}>
          Новости
        </Link>
        <Link to="contact" onClick={toggleActive}>
          Контакты
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
