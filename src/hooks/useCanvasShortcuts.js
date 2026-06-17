import { useEffect, useState } from "react";

const isEditable = el => el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);

const useCanvasShortcuts = ({ undo, redo }) => {
  const [isSpaceDown, setIsSpaceDown] = useState(false);

  useEffect(() => {
    const onKeyDown = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === "z") undo();
      if ((e.metaKey || e.ctrlKey) && e.key === "y") redo();
      if (e.code === "Space" && !e.repeat && !isEditable(e.target)) {
        e.preventDefault();
        setIsSpaceDown(true);
      }
    };
    const onKeyUp = e => {
      if (e.code === "Space") setIsSpaceDown(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [undo, redo]);

  return { isSpaceDown };
};

export default useCanvasShortcuts;
