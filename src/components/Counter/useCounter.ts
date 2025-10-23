import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  const [secretNumber, setSecretNumber] = useState(-3);
  function handlePlus() {
    //setCount(count + 1);
    setCount((prev) => prev + 1);
  }
  function handleMinus() {
    setCount((prev) => prev - 1);
  }
  function handleClear() {
    setCount(0);
  }
  function finishGame() {
    setCount(0);
    setSecretNumber(Math.floor(Math.random() * 20) - 10);
    console.log(secretNumber);
  }
  return {
    count,
    secretNumber,
    finishGame,
    handleClear,
    handlePlus,
    handleMinus,
  };
}
