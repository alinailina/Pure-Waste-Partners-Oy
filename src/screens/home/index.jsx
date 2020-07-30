import React from "react";
import styles from "./index.module.scss";
import Hero from "./Hero";
import Problem from "./Problem";
import Solution from "./Solution";
const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          amet corrupti officiis.
        </p>
      </div>
      <Problem />
      <div>
        {" "}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          amet corrupti officiis eum, dolorum quos molestiae facilis?
        </p>
      </div>
      <Solution />
      <div className={styles.icons}>
        <div>
          {" "}
          <img src={require("../../assets/svgs/cotton.svg")} alt="" />
        </div>
        <div>
          {" "}
          <img src={require("../../assets/svgs/watering-can.svg")} alt="" />
        </div>
        <div>
          {" "}
          <img src={require("../../assets/svgs/t-shirt.svg")} alt="" />
        </div>
        <div>
          {" "}
          <img src={require("../../assets/svgs/factory.svg")} alt="" />
        </div>
        <div>
          {" "}
          <img src={require("../../assets/svgs/needle.svg")} alt="" />
        </div>
        <div>
          {" "}
          <img src={require("../../assets/svgs/thread.svg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
