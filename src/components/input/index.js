import React from "react";
import "./input.scss";

const Input = ({ onChange }) => {
  return (
    <input onChange={(event) => onChange(event)} placeholder="type here..." />
  );
};

export default Input;
//child
