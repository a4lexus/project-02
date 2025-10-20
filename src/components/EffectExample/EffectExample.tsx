import { useEffect, useState } from "react";

export default function EffectExample() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);

  function handlePlus() {
    setCount((prev) => prev + 1);
  }

  function generateRandom() {
    setRandom(Math.random() * 10);
  }
  useEffect(() => {
    console.log("Use effect 1");
    // при первом рендере, при любом изменении
  });

  useEffect(() => {
    console.log("Use effect 2, empty dependencies array");
    // только при первом рендере.
  }, []);

  useEffect(() => {
    console.log("Use effect 3, with dependencies");
    // только при первом рендере, и при изменении зависимости
  }, [random]);

  return (
    <div>
      <h2>EffectExample</h2>
      <p>Count: {count}</p>
      <p>Random {random}</p>
      <button type="button" onClick={handlePlus}>
        Count+1
      </button>
      <button type="button" onClick={generateRandom}>
        Generate random
      </button>
    </div>
  );
}

// Component lifecycle жизненный цикл
// 1. mount - рождения - устанавливается на экране первый раз - первый рендер
// 2. update - когда компонент изменяется
// 3. unmount - когда перестает отображаться на экране
