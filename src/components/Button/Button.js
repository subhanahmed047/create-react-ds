import React from "react";

const Button = () => {
  return (
    <button
      style={{ color: "brown", backgroundColor: "lightgray" }}
      onClick={() => alert("Clicked")}
    >
      Hello React!
    </button>
  );
};

export default Button;
