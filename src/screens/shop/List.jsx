import React from "react";
import styles from "./index.module.scss";
import Items from "./Data";
import Item from "./Item";

const List = () => {
  return (
    <div className={styles.list}>
      <div>
        {Items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
        {/* Align last flex item to left */}
        <i aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default List;
