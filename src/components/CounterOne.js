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

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState); //dispatch method allows us to execute the code corresponding to a particular action.
  // inside useReducer we have given reducer function and initial state[copunt value]
  //call to useReducer returns a pair of values.
  // 1. current value of the state which is count value in our example
  // 2. dispatch method which is capable of accepting an action to execute the code specified in the render function.
  //we use this dispatch method to dispatch the appropriate action based on what button the user clicks the action we trigger the state transactions when
  //state changes the component re renders and the collect value is displayed in the browser
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
