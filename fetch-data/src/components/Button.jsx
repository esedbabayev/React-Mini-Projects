import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.searchByIdHandler}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {props.label}
    </button>
  );
};

export default Button;
