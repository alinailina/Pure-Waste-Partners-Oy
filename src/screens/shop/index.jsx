import React from "react";
import styles from "./index.module.scss";

// Components
import Header from "../../components/Header";

const Shop = () => {
  return (
    <div className={styles.container}>
      <Header title="Магазин" />
      <p>
        Лорем ипсум долор сит амет, ех мел иуварет алияуам садипсцинг, ет хинц
        виси елаборарет яуи. Яуи ут мазим делецтус садипсцинг. Цум сцаевола
        партиендо ин, иисяуе нонумес вивендум сеа ан, еа цум темпор цоррумпит
        делицатиссими. Ех ферри моллис вих, те хас индоцтум оцурререт. Сонет
        ментитум мел ех. Дуис цивибус перципит ет иус.
      </p>
      <div>
        {" "}
        <div>
          {" "}
          <img src={require("../../assets/uniforms/2.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/uniforms/3.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/uniforms/4.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/uniforms/5.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/uniforms/6.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/uniforms/7.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/uniforms/8.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/uniforms/9.jpg")} alt="" />
        </div>
        <i aria-hidden={true}></i>
        <i aria-hidden={true}></i>
      </div>
    </div>
  );
};

export default Shop;
