import { useState } from "react";
import Wordbox from "../Wordbox";
import wordList from "../../word-list";
import "./style.css";

const generateWord = (size: number) => {
  const sizeIndex =
    size === undefined ? Math.floor(Math.random() * wordList.length) : size - 3;

  if (sizeIndex < 0 || sizeIndex >= wordList.length) {
    return null;
  }

  const words = wordList[sizeIndex];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

const Stage = () => {
  const [words, setWords] = useState<string[]>(["jahoda", "banán", "jablko"]);
  const [mistakes, setMistakes] = useState(0);

  const handleFinish = () => {
    const newWord = generateWord(6);
    setWords((prev) => {
      const removeFirst = prev.slice(1);
      return newWord ? [...removeFirst, newWord] : removeFirst;
    });
  };

  const handleMistake = () => {
    setMistakes((prev) => prev + 1);
  };

  return (
    <div className="stage">
      <div className="stage__mistakes">Chyb: {mistakes}</div>
      <div className="stage__words">
        {words.map((word, i) => (
          <Wordbox
            word={word}
            onFinish={handleFinish}
            active={i === 0}
            key={word}
            onMistake={handleMistake}
          />
        ))}
      </div>
    </div>
  );
};

export default Stage;
