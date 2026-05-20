import { useEffect } from "react";

// pin the document to the light theme while mounted, restoring the previous theme on unmount
const useForceLightTheme = () => {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.getAttribute("data-theme");
    root.setAttribute("data-theme", "light");
    return () => {
      if (previous === null) root.removeAttribute("data-theme");
      else root.setAttribute("data-theme", previous);
    };
  }, []);
};

export default useForceLightTheme;
