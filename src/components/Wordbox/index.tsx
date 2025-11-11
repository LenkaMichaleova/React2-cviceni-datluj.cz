import React, { useEffect, useState } from "react";
import "./style.css";

interface IWordboxProp {
  word: string;
  onFinish: () => void;
}

const Wordbox: React.FC<IWordboxProp> = ({ word, onFinish }) => {
  const [lettersLeft, setLetersLeft] = useState<string>(word);

  const handleKeyUp = (e: KeyboardEvent) => {
    if (lettersLeft.length === 1 && e.key === lettersLeft[0]) {
      onFinish()
    } else if (e.key === lettersLeft[0]) {
      setLetersLeft((prev) => prev.slice(1));
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => document.removeEventListener("keyup", handleKeyUp);
  }, [lettersLeft]);

  return <div className="wordbox">{lettersLeft}</div>;
};

export default Wordbox;
