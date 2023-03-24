import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0); //1,2

  const incrementClick = () => {
    console.log("incrementClick");
    setCounter(counter + 1);
  };
  return (
    <div className="container">
      <h3>Counter: {counter}</h3>
      <botton
        type="botton"
        className="btn btn-success"
        onClick={incrementClick}
      >
        Increment
      </botton>
      <botton
        type="botton"
        className="btn btn-danger"
        onClick={() => {
          console.log("decrementClick");
          setCounter(counter - 1);
        }}
      >
        Decrement
      </botton>
      <botton
        type="botton"
        className="btn btn-secondary"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </botton>
    </div>
  );
};

export default Counter;
