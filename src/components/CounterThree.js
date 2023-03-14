import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  //defining initial state and reducer function.
  //reducer function accepts the current state and an action returns newState depending on action.
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState); //dispatch method allows us to execute the code corresponding to a particular action.
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>
        <div>Count Two - {countTwo}</div>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
      </div>
    </div>
  );
}

export default CounterThree;
