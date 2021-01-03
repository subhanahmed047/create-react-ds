import React from "react";

const Button = (props) => {
  return (
    <button
      style={{ color: "brown", backgroundColor: "lightgray" }}
      onClick={() => alert("Clicked")}
    >
      {props.children}
    </button>
  );
};

export default Button;
