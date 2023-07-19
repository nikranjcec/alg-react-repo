import React from "react";

function Button({ hendleClick, text }) {
  return <button onClick={hendleClick}>{text}</button>;
}

export default Button;
