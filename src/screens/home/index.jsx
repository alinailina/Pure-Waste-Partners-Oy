import React from "react";
import styles from "./index.module.scss";
import Hero from "./Hero";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <div>
        <p>У вас есть ненужный текстиль?</p>
      </div>

      <ul>
        <li>
          <div>
            {" "}
            <img src={require("../../assets/svgs/textile.svg")} alt="" />
          </div>
          <p>
            Мы переработаем ваш текстиль с применением инновационных технологий
            без ущерба для окружающей среды.
          </p>
        </li>
        <li>
          <div>
            <img src={require("../../assets/svgs/factory.svg")} alt="" />
          </div>
          <p>
            С нами ваш текстиль не попадет на полигоны, а обретет вторую жизнь в
            виде новых текстильных изделий.
          </p>
        </li>

        <li>
          <div>
            <img src={require("../../assets/svgs/certificate.svg")} alt="" />
          </div>
          <p>
            Сдавая свой текстиль нам на переработку вы получаете сертификат о
            ...
          </p>{" "}
        </li>
        <li>
          <div>
            <img src={require("../../assets/svgs/t-shirt.svg")} alt="" />
          </div>
          <p>
            А также изделия высшего качества пошитые по вашему специальному
            заказу из полученных нами вторичных материалов.
          </p>{" "}
        </li>
      </ul>
      <Link to="/contact">Связаться с нами</Link>
    </div>
  );
};

export default Home;
