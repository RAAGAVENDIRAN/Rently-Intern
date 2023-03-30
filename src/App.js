import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);
  return (
    <div className="App">
      <h1>{count}</h1>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <button
        type="submit"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        type="submit"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        type="submit"
        onClick={() => {
          dispatch(incrementByAmount(incrementAmount));
        }}
      >
        Increment by Input Value
      </button>
    </div>
  );
}

export default App;
