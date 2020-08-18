import React from "react";
import styles from "./index.module.scss";

// Components
import Header from "../../components/Header";

const Shop = () => {
  return (
    <div className={styles.container}>
      <Header title="Магазин" />
      <section>
        <p>
          Наш магазин готовится к запуску в он-лайн режиме. Пока вы можете
          заказать у нас предметы униформы, представленные в галерее ниже.{" "}
        </p>
        <p>
          Все изделия выполнены из вторичных материалов, обработанных и отшитых
          по методу{" "}
          <a
            href="https://taukodesign.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TAUKO design
          </a>
          .
        </p>
      </section>
      <section>
        <div>
          <div>
            <img src={require("../../assets/uniforms/2.jpg")} alt="" />
            <div>
              <h4>Сделать заказ</h4>
            </div>
          </div>
          <div>
            <img src={require("../../assets/uniforms/3.jpg")} alt="" />
            <div>
              <h4>Сделать заказ</h4>
            </div>
          </div>
          <div>
            <img src={require("../../assets/uniforms/4.jpg")} alt="" />
            <div>
              <h4>Сделать заказ</h4>
            </div>
          </div>
          <div>
            <img src={require("../../assets/uniforms/5.jpg")} alt="" />
            <div>
              <h4>Сделать заказ</h4>
            </div>
          </div>
          <div>
            <img src={require("../../assets/uniforms/6.jpg")} alt="" />
            <div>
              <h4>Сделать заказ</h4>
            </div>
          </div>
          <div>
            <img src={require("../../assets/uniforms/7.jpg")} alt="" />
            <div>
              <h4>Сделать заказ</h4>
            </div>
          </div>
          <div>
            <img src={require("../../assets/uniforms/8.jpg")} alt="" />
            <div>
              <h4>Сделать заказ</h4>
            </div>
          </div>
          <div>
            <img src={require("../../assets/uniforms/9.jpg")} alt="" />
            <div>
              <h4>Сделать заказ</h4>
            </div>
          </div>
          <i aria-hidden={true}></i>
          <i aria-hidden={true}></i>
        </div>
      </section>
    </div>
  );
};

export default Shop;
