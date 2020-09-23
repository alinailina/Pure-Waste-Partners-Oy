import React from "react";
import styles from "./index.module.scss";
import List from "./List";

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
          Все предметы униформы изготовлены из списанного постельного белья из
          отелей. Текстиль был обработан по методу{" "}
          <a
            href="https://taukodesign.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TAUKO design
          </a>
          . Все изделия были отшиты по моделям TAUKO в Санкт-Петербурге.
        </p>
      </section>
      <List />
    </div>
  );
};

export default Shop;
