import React from "react";
import "./index.scss";

import { Facebook, Instagram, Linkedin } from "../assets/icons";
import Button from "./Button";
const Footer = () => {
  return (
    <footer>
      <div>
        <aside>
          <h3>Компания</h3>
          <p>Технологический уход за текстилем</p>
          <div>
            <h4>Мы в социальных сетях:</h4>
            <ul>
              <li>
                <a href="/">Linkedin</a>{" "}
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Vkontakte</a>
              </li>
            </ul>
          </div>
        </aside>
        <form>
          <h4>Подпишитесь на рассылку</h4>
          <div>
            <input type="email" placeholder="Ваша почта" />
            <input type="submit" value="Подписаться" />
          </div>
        </form>
      </div>
      <p className="copyright">© - Компания, 2020.</p>
    </footer>
  );
};

export default Footer;
