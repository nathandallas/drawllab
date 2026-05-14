import { useState, useEffect } from "react";

const useRoughMode = () => {
  const [style, setStyle] = useState(() => localStorage.getItem("style") || "clean");

  useEffect(() => {
    document.documentElement.setAttribute("data-style", style);
  }, [style]);

  useEffect(() => {
    const sync = e => setStyle(e.detail);
    window.addEventListener("stylechange", sync);
    return () => window.removeEventListener("stylechange", sync);
  }, []);

  const toggleStyle = () => {
    const newStyle = style === "clean" ? "rough" : "clean";
    localStorage.setItem("style", newStyle);
    window.dispatchEvent(new CustomEvent("stylechange", { detail: newStyle }));
  };

  return { style, toggleStyle };
};

export default useRoughMode;
