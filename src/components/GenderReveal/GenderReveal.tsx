import { useState } from "react";
import type { GenderInfo } from "../../types/GenderInfo";
import styles from './GenderReveal.module.css'

export default function GenderReveal() {
  const [name, setName] = useState("");
  const [genderInfo, setGenderInfo] = useState<GenderInfo | undefined>(
    undefined
  );

  const fetchGenderByName = async (n: string) => {
    const res = await fetch(
      `https://api.genderapi.io/api/?key=68f6b1a3a4be3841348545b0&name=${n}`
    );
    const data: GenderInfo = await res.json();
    setGenderInfo(data);
  };
  function handleGenderReveal() {
    fetchGenderByName(name);
  }

  return (
    <div className={styles.container}>
      <h2>GenderReveal</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name ..."
      />
      <button type="button" onClick={handleGenderReveal}>
        Reveal Gender
      </button>
      {genderInfo ? (
        <div>
          <div>Gender: {genderInfo.gender}</div>
          <div>Name: {genderInfo.name}</div>
          <div>Probability: {genderInfo.probability}</div>
          <div>Remaining credits: {genderInfo.remaining_credits}</div>
          <div>Country: {genderInfo.country}</div>
        </div>
      ) : null}
    </div>
  );
}

// DRY - don't repeat yourself
// KISS - keep it simple stupid
// SOlID
