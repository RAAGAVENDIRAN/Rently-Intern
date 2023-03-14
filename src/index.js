import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import useDocuemntTitle from "./hooks/useDocumentTitle";
import Users from "./hooks/Users";
import App from "./App";
function Counter(props) {
  const [count, setState] = useState(0);
  const [name, setName] = useState(0);

  useDocuemntTitle(`${name} has clicked ${count} times`);
  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has clicked {count} times
      </div>
      <button onClick={() => setState(count + 1)}>Increase</button>
    </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")); //12
root.render(<App />);
