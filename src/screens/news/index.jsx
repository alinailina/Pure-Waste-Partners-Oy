import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Header from "../../components/Header";
import styles from "./index.module.scss";

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => setPosts(response.items))
      .catch(console.error);
  }, []);

  return (
    <div className={styles.container}>
      <Header title="Новости" />
      <Posts posts={posts} />
    </div>
  );
};

export default News;
