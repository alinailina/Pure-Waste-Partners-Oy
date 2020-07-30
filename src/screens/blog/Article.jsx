import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./index.module.scss";

const Article = () => {
  return (
    <div className={styles.article}>
      <h3>
        <span>Monday, July 6 </span>
        Мировой экономический форум (WEF) приглашает задуматься над тем, что мы
        носим
      </h3>
      <img src={require("./placeholder.jpg")} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum
        optio delectus voluptatem culpa iste dolor sequi.
      </p>
      <Link to="/">Read full article</Link>
    </div>
  );
};

export default Article;
