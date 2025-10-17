import { useState } from "react";

export default function WeightCalculator() {
  const [height, setHeight] = useState<string>("170");
  const [weight, setWeight] = useState<number>(0);
  const [gender, setGender] = useState<string>("male");

  function calculateIdealWeight() {
    const difference = gender === "female" ? 110 : 100;
    setWeight(Number(height) - difference);
  }
  return (
    <div>
      <h2>WeightCalculator</h2>
      {/* controlled input */}
      <label htmlFor="height-input">Height </label>
      <input
        id="height-input"
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <select
        name="gender"
        id="gender-input"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="button" onClick={calculateIdealWeight}>
        Calculate ideal weight
      </button>
      {weight ? <p>Your ideal weight is{weight}</p> : null}
    </div>
  );
}
