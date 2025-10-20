import { useState } from "react";
import styles from "./GenderByName.module.css";

export default function GenderByName() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [probability, setProbability] = useState("");
  const [gender, setGender] = useState("");
  const [remaining_credits, setRemaining_credits] = useState("");
  const [message, setMessage] = useState("");

  function handleFetchGender() {
    fetchGender();
  }
  async function fetchGender() {
    try {
      const res = await fetch(
        `https://api.genderapi.io/api/?key=68f6b1a3a4be3841348545b0&name=${name}`
      );
      if (!res.ok) {
        throw new Error("Failed to load gender");
      }
      const data = await res.json();
      setGender(data.gender);
      setCountry(data.country);
      setProbability(data.probability);
      setRemaining_credits(data.remaining_credits);
    } catch (err) {
      if (err instanceof Error) setMessage(err.message);
    }
  }

  return (
    <div className={styles.container}>
      <h2>Gender By Name</h2>
      <p>{message}</p>
      <p className={styles.apis}>
        имя: {name} <br /> пол: {gender} <br /> страна: {country} <br />
        вероятность:
        {probability} <br /> Остаток запросов (credits): {remaining_credits}
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={handleFetchGender}>
        Get Gender By Name
      </button>
    </div>
  );
}
