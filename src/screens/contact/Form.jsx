import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label>
          Имя:
          <input type="text" name="name" />
          <p>Представьтесь, пожалуйста</p>
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
      </div>

      <label>
        Ваше сообщение:
        <textarea name="message"></textarea>
        <p>
          Отправляя форму, я даю свое согласие на обработку персональных данных
          в соответствии с{" "}
          <Link to="/">политикой конфиденциальности сайта</Link>
        </p>
      </label>
      <div data-netlify-recapture="true"></div>
      <input type="submit" value="Отправить" />
    </form>
  );
};

export default Form;
