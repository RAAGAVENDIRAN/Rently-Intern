import React from "react";
import ReactDOM from "react-dom";

//function

function myfunc1() {
  return "Hello";
}

function myfunc2() {
  return "World";
}

function myfunc3() {
  return "!";
}

function main1() {
  return (
    <div>
      <myfunc1 />
      <myfunc2 />
      <myfunc3 />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(<h1>{main1()}</h1>);
