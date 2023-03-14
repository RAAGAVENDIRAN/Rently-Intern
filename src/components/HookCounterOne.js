import React, { useState, useEffect } from "react";

export default function HookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Cliked ${count} times`;
  });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}
