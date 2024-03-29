import { useEffect, useState } from "react";

const TIMEOUT_MILI_SECONDS = 50;

export const useCoverText = (coverText: string) => {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < coverText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + coverText[textIndex]);
        setTextIndex((prevIndex) => prevIndex + 1);
      }, TIMEOUT_MILI_SECONDS);
      
      return () => { clearInterval(timeout) };
    }
  }, [textIndex]);

  function resetValues () {
    setText("");
    setTextIndex(0);
  }

  return { text, resetValues };
};
