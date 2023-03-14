import { useEffect } from "react";

export default function useDocuemntTitle(title) {
  useEffect(() => {
    document.title = title;

    return () => {
      console.log("Clean Up"); // componentWillUnMount
    };
  });
}
