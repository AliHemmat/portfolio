"use client";
import { useEffect, useState } from "react";

function Typing({ stringsArr, typingSpeed = 100, pauseBetweenStrings = 2000 }) {
  stringsArr ??= [
    "Extroverted <FrontEnd/> Developer...",
    "Based in Tehran...",
    "Happy to meet you!!!",
  ];
  // const currentText = textsArr[0];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  let delayTimer;
  const delay = async (pause) =>
    await new Promise((res) => (delayTimer = setTimeout(res, pause)));

  useEffect(() => {
    if (stringsArr.length === 0) return;

    let timeout;
    if (isTyping) {
      if (currentText.length < stringsArr[currentStringIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText((currentText) =>
            stringsArr[currentStringIndex].slice(0, currentText.length + 1)
          );
        }, typingSpeed);
      } else {
        setIsTyping(false);
      }
    } else {
      timeout = setInterval(() => {
        if (currentText === "") {
          setCurrentStringIndex(
            (prevIndex) => (prevIndex + 1) % stringsArr.length
          );
          setIsTyping(true);
        } else {
          setCurrentText((currentText) => currentText.slice(0, -1));
        }

        console.log(currentStringIndex);
      }, typingSpeed / 2);
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentStringIndex,
    isTyping,
    stringsArr,
    typingSpeed,
    pauseBetweenStrings,
  ]);

  return (
    <p className="text-sm font-light text-center text-gray-700 tracking-[-1]">
      {currentText}
      <span className="animate-blink">|</span>
    </p>
  );
}

export default Typing;
