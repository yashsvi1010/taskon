import React from "react";
import "./styles.css";
const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a task" className="input__box" />
      <button className="input__box_submit_btn">Go</button>
    </form>
  );
};

export default InputField;
