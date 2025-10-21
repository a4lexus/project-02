import { useState } from "react";
import styles from "./SpaceMissionForm.module.css";

export default function SpaceMissionForm() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("Jupiter");

  return (
    <div className={styles.container}>
      <h2>Apply for Space Mission</h2>
      {/* Falsy values */}

      {name && (
        <p>
          Astronaut {name} is heading to {planet}
        </p>
      )}
      <label htmlFor="name-input">Name:</label>

      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        name="planet"
        id="planet-input"
        value={planet}
        onChange={(e) => setPlanet(e.target.value)}
      >
        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>
    </div>
  );
}