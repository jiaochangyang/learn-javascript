import { useEffect } from "react";

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      // componentWillUnmount
      console.log("Cleanup");
    };
  });
}

export default useDocumentTitle;
