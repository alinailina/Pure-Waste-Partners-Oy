import React from "react";
import Button from "../../components/Button";

const Form = () => {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
      </div>

      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <div data-netlify-recapture="true"></div>
      <Button value="Submit" />
    </form>
  );
};

export default Form;
