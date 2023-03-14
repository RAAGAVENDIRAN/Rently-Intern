import React, { useState, useReducer } from "react";

import ComponentC from "./components/ComponentF";
import ComponentE from "./components/ComponentE";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentB from "./components/ComponentB";
import ComponentA from "./components/ComponentA";
import ComponentD from "./components/ComponentD";

export const CountContext = React.createContext();

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
