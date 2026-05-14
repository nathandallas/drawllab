import { useCallback, useReducer } from "react";

const reducer = (state, action) => {
  const { history, index } = state;
  switch (action.type) {
    case "set": {
      const newEl = typeof action.payload === "function"
        ? action.payload(history[index])
        : action.payload;
      if (action.overwrite) {
        const h = [...history];
        h[index] = newEl;
        return { history: h, index };
      }
      return { history: [...history.slice(0, index + 1), newEl], index: index + 1 };
    }
    case "undo":
      return index > 0 ? { history, index: index - 1 } : state;
    case "redo":
      return index < history.length - 1 ? { history, index: index + 1 } : state;
    case "clear":
      return index > 0 ? { history, index: 0 } : state;
    default:
      return state;
  }
};

const useHistory = initialState => {
  const [{ history, index }, dispatch] = useReducer(reducer, {
    history: [initialState],
    index: 0,
  });

  const setState = useCallback(
    (payload, overwrite = false) => dispatch({ type: "set", payload, overwrite }),
    []
  );
  const undo = useCallback(() => dispatch({ type: "undo" }), []);
  const redo = useCallback(() => dispatch({ type: "redo" }), []);
  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  return [history[index], setState, undo, redo, clear];
};

export default useHistory;
