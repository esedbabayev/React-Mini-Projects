// Styles
import "./App.css";

// Custom Hook
import useCustom from "./Hooks/useCounter"

function App() {
  const [count, increment, decrement, customIncrement, customDecrement, reset] = useCustom();

  return (
    <>
      <div className="App">
        <button onClick={customDecrement} className="btn">Minus</button>
        <button onClick={decrement} className="btn">Decrease</button>
        <p className="counter">{count}</p>
        <button onClick={increment} className="btn">Increase</button>
        <button onClick={customIncrement} className="btn">Plus</button>
        <button onClick={reset} style={{ backgroundColor: "red" }} className="btn">Reset</button>
      </div>
    </>
  );
}

export default App;
