import React from "react";

const InputField = (props) => {
  return (
    <input
      className="border border-gray-300 rounded px-2 py-1"
      type="text"
      placeholder={props.placeholder}
    />
  );
};

export default InputField;
