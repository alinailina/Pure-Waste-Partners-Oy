import React from "react";
//import { Link } from "react-router-dom";
// Styles
import styles from "./index.module.scss";

// Components
import Header from "../../components/Header";
import Article from "./Article";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Header title="Новости" />
      <p>
        Лорем ипсум долор сит амет, ех мел иуварет алияуам садипсцинг, ет хинц
        виси елаборарет яуи. Яуи ут мазим делецтус садипсцинг. Цум сцаевола
        партиендо ин, иисяуе нонумес вивендум сеа ан, еа цум темпор цоррумпит
        делицатиссими. Ех ферри моллис вих, те хас индоцтум оцурререт. Сонет
        ментитум мел ех. Дуис цивибус перципит ет иус.
      </p>
      <div>
        <Article />
        <Article />
        <Article />

        <i aria-hidden={true}></i>
        <i aria-hidden={true}></i>
      </div>
    </div>
  );
};

export default Blog;
