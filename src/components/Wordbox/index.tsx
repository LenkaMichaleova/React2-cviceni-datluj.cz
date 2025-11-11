import React, { useEffect, useState } from "react";
import "./style.css";

interface IWordboxProp {
  word: string;
}

const Wordbox: React.FC<IWordboxProp> = ({ word }) => {
  const [lettersLeft, setLetersLeft] = useState<string>(word);

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === lettersLeft[0]) {
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
