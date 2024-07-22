import React from "react";
import Context from "../context"

import { useContext } from "react";

const Button = (props) => {

  const {searchByIdHandler} = useContext(Context); 

  return (
    <button
      onClick={searchByIdHandler}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {props.label}
    </button>
  );
};

export default Button;
