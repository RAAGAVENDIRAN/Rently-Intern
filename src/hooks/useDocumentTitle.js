import { useEffect } from "react";

function useDocuemntTitle(title) {
  useEffect(() => {
    document.title = `Count ${title}`;
  });
}

export default useDocuemntTitle;
