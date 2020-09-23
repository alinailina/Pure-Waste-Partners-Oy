import React, { useState } from "react";

const Item = ({ item }) => {
  const front = item.front;
  const back = item.back;
  const title = item.title;
  const [img, setImg] = useState(front);

  return (
    <div>
      <img
        src={img}
        onMouseEnter={() => {
          setImg(back);
        }}
        onMouseOut={() => {
          setImg(front);
        }}
        alt="item"
      />
      <div>
        <p>{title}</p>
        <p>Цена: &mdash;</p>
        <a href="mailto:info@fabrevizion.ru">Заказать</a>
      </div>
    </div>
  );
};

export default Item;
