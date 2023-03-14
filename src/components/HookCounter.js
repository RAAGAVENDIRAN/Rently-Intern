import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const Increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Incremewnt</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={Increment5}>Increment5</button>
    </div>
  );
};

export default HookCounter;
