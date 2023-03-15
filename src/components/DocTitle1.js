import React, { useState } from "react";
import useDocuemntTitle from "../hooks/useDocumentTitle";

function DocTitle1() {
  const [count, setCount] = useState(0);

  useDocuemntTitle(count);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count - {count}
      </button>
    </div>
  );
}

export default DocTitle1;
