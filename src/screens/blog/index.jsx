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
      <Header title="Blog" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
        aliquid tempore quasi, alias dolore tenetur nemo a autem voluptatum
        iusto maiores non quisquam mollitia eveniet? Pariatur, veniam fugiat!
        Neque, obcaecati.
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
