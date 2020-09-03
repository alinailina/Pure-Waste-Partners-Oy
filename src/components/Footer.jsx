import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <aside>
          <h3>FabRevizion</h3>
          <p>Новый взгляд на уход за текстилем</p>
          <div>
            <h4>Мы в социальных сетях:</h4>
            <ul>
              <li>
                <a href="/">
                  {" "}
                  <span>
                    {" "}
                    <img
                      src={require("../assets/svgs/linkedin-circled.svg")}
                      alt=""
                    />
                  </span>
                </a>{" "}
              </li>
              <li>
                <a href="/">
                  {" "}
                  <span>
                    {" "}
                    <img
                      src={require("../assets/svgs/facebook-circled.svg")}
                      alt=""
                    />
                  </span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>
                    {" "}
                    <img
                      src={require("../assets/svgs/medium-circled.svg")}
                      alt=""
                    />
                  </span>
                </a>
              </li>

              <li>
                <a href="/">
                  <span>
                    {" "}
                    <img
                      src={require("../assets/svgs/instagram-circled.svg")}
                      alt=""
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <form>
          <h4>Подпишитесь на нашу рассылку</h4>
          <div>
            <input type="email" placeholder="Ваша почта" />
            <input type="submit" value="Подписаться" />
          </div>
        </form>
      </div>
      <p className="copyright">© FabRevizion, 2020.</p>
    </footer>
  );
};

export default Footer;
