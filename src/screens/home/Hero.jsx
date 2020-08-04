import React from "react";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <section>
      <div>
        <div>
          <h1>Компания</h1>
          <p>Технологический уход за текстилем</p>
          <div>
            <a href="/">Подробнее</a>
            <a href="/">Контакты</a>
          </div>
        </div>
      </div>
      <div>
        <img src={require("../../assets/1.jpg")} alt="" />
      </div>
    </section>
  );
};

export default Hero;
