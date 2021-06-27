
import React from "react";
function Counter() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <h1>This is counter app</h1>
      <button
        className="increment-btn"
        onClick={(e) => setCounter(counter + 1)}
      >
        Increment
      </button>
      <button
        className="decrement-btn"
        onClick={(e) => setCounter(counter - 1)}
      >
        Decrement
      </button>
      <div className="counter-text">{counter}</div>
    </div>
  );
}

export default Counter;
