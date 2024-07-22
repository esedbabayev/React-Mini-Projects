import React, { useContext, useRef, useState } from "react";
import Context from "../context";

const Checkbox = (props) => {
  const inputRef = useRef();

  const [checked, setChecked] = useState(null);

  const { deleteDataHandler } = useContext(Context);

  if (inputRef.current?.checked) {
    deleteDataHandler();
    setChecked(!checked);

    console.log(checked);
  }

  return (
    <input
      ref={inputRef}
      type="checkbox"
      checked={checked}
      className="h-5 w-5"
    />
  );
};

export default Checkbox;
