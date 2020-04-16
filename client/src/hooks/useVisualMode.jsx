import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [historyVM, setHistoryVM] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    if (replace) {
      setHistoryVM((prevHistory) => [...prevHistory.slice(0, -1), newMode]);
    } else {
      setHistoryVM((prevHistory) => [...prevHistory, newMode]);
    }
    console.log("VM", mode, historyVM);
  };

  const back = () => {
    if (historyVM.length > 1) {
      setMode(historyVM[historyVM.length - 2]);
      setHistoryVM((prevHistory) => prevHistory.slice(0, -1));
    }
  };

  return { mode, transition, back, historyVM };
}
