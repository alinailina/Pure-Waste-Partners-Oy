import React from "react";
import styles from "./index.module.scss";

// Components
import Header from "../../components/Header";

const Events = () => {
  return (
    <div className={styles.container}>
      <Header title="Events" />
      <ul>
        <li>
          <p>
            <span>September, 16 | 2020</span>
            International Day for the Preservation of the Ozone Layer
          </p>
          <a
            href="https://www.un.org/en/events/ozoneday/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View details
          </a>
        </li>
        <li>
          <p>
            <span>October, 16 | 2020</span>
            World Food Day
          </p>
          <a
            href="https://www.oxfamamerica.org/take-action/events/world-food-day/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View details
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Events;
