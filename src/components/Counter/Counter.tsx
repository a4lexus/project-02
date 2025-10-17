import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // useState принимает начальное значение переменной состояния
  // возвращает кортеж(tuple), в котором на первом месте - переменная состояния(state)
  // на втором месте - функция сеттер
  
  const [secretNumber, setSecretNumber] = useState (-3);
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
    setSecretNumber(Math.floor(Math.random() * 20)-10);
    console.log(secretNumber);
  }
  if (count === secretNumber)
    return (
      <div>
        Game is completed!
        <button onClick={handleClear}>Start over</button>
      </div>
    );

  if (count === secretNumber) return <p>Game is compleed!</p>;
  return (
    <div>
      {/* {count === secretNumber? <div>Bingo}</div> : null} */}
      
      <button type="button" onClick={handleMinus}>
        -
      </button>
      Counter:{count}
      <button type="button" onClick={handlePlus}>
        +
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}
// Создать кнопку -1, чтобы она работала
// доп. создать кнопку clear - которая бы сбрасывала каунтер до 0
