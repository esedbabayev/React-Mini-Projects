import { useState } from "react";

const useCounter = (intialState = 0, minLimit = -10, maxLimit = 10) => {
  const [count, setCount] = useState(intialState);

  const increment = () => {
    setCount(count + 1)
  };
  const decrement = () => {
    setCount(count - 1)
  };
  const customIncrement = (value) => {
    setCount(count + value)
  }
  const customDecrement = (value) => {
    setCount(count + value)
  }
  const reset = () => {
    setCount(count - count)
  }

  return [count, increment, decrement, customIncrement, customDecrement, reset];
}

export default useCounter