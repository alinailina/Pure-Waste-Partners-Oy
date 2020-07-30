import React from "react";
import Header from "../../components/Header";
import styles from "./index.module.scss";

import Form from "./Form";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Header title="Contact" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum
        quo quasi, perspiciatis totam magnam debitis mollitia voluptate a, sequi
        cupiditate quam sed beatae officia? Inventore nam earum tenetur harum.
      </p>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
