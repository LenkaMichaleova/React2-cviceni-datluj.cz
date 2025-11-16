import { useEffect, useState } from "react";
import "./style.css";

interface IWordboxProp {
  word: string;
  onFinish: () => void;
  active: boolean;
}

const Wordbox = ({ word, onFinish, active }: IWordboxProp) => {
  const [lettersLeft, setLetersLeft] = useState<string>(word);
  const [mistake, setMistake] = useState(false);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (lettersLeft.length === 1 && e.key === lettersLeft[0]) {
        onFinish();
      } else if (e.key === lettersLeft[0]) {
        setLetersLeft((prev) => prev.slice(1));
        setMistake(false);
      } else {
        setMistake(true);
      }
    };

    active && document.addEventListener("keyup", handleKeyUp);
    return () => {
      active && document.removeEventListener("keyup", handleKeyUp);
    };
  }, [lettersLeft, active, onFinish]);

  return (
    <div className={mistake ? "wordbox wordbox--mistake" : "wordbox"}>
      {lettersLeft}
    </div>
  );
};

export default Wordbox;
