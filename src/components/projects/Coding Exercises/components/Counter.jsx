import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Coutner</h1>
      <button
        className="btn btn-primary me-2"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <button
        className="btn btn-secondary me-2"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
      <button className="reset btn btn-danger" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;