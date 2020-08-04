import React from "react";
import styles from "./index.module.scss";

// Components
import Header from "../../components/Header";

const Events = () => {
  return (
    <div className={styles.container}>
      <Header title="События" />
      <ul>
        <li>
          <h4>
            <span>15 сентября | 2020</span>
            International Day for the Preservation of the Ozone Layer
          </h4>
          <a
            href="https://www.un.org/en/events/ozoneday/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Подробнее
          </a>
        </li>
        <li>
          <h4>
            <span>16 октября| 2020</span>
            World Food Day
          </h4>
          <a
            href="https://www.oxfamamerica.org/take-action/events/world-food-day/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Подробнее
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Events;
