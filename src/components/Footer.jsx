import React from "react";
import "./index.scss";

import { Facebook, Instagram, Linkedin } from "../assets/icons";
import Button from "./Button";
const Footer = () => {
  return (
    <footer>
      <div>
        <aside>
          <h3>[Logo]</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos vitae
            dolorum in enim expedita doloribus est sunt sit.
          </p>
          <div>
            <div>
              {" "}
              <img src={Facebook} alt="facebook-icon" />
            </div>{" "}
            <div>
              <img src={Instagram} alt="instagram-icon" />
            </div>
            <div>
              <img src={Linkedin} alt="linkedin-icon" />
            </div>
          </div>
        </aside>
        <form>
          <h4>Subscribe to our newsletter</h4>
          <div>
            <input type="email" placeholder="Your email" />
            <Button value="Subscribe" />
          </div>
        </form>
      </div>
      <p className="copyright">© - , 2020.</p>
    </footer>
  );
};

export default Footer;
