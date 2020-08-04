import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./index.module.scss";

const Article = () => {
  return (
    <div className={styles.article}>
      <h3>
        <span>Понедельник, 6 Июля</span>
        Мировой экономический форум (WEF) приглашает задуматься над тем, что мы
        носим
      </h3>
      <img src={require("./placeholder.jpg")} alt="" />
      <p>
        Лорем ипсум долор сит амет, ех мел иуварет алияуам садипсцинг, ет хинц
        виси елаборарет яуи.
      </p>
      <Link to="/">Читать полностью</Link>
    </div>
  );
};

export default Article;
