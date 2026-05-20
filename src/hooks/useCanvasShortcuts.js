import { useEffect, useState } from "react";

const isEditable = el => el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);

// global shortcuts: ctrl/cmd+z = undo, ctrl/cmd+y = redo, space = hold-to-pan.
// shortcuts are suppressed while focus is inside an editable element so typing isn't hijacked.
// isSpaceDown is returned so the canvas can switch tools/cursor while space is held.
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
