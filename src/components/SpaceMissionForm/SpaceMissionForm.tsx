import { useState } from "react";
import styles from "./SpaceMissionForm.module.css";

export default function SpaceMissionForm() {
  const [name, setName] = useState<string>("");
  const [planet, setPlanet] = useState<string>("Mars");

  return (
    <div className={styles.container}>
      <h1>SpaceMissionForm</h1>
      <label htmlFor="name-input">Astronaut </label>
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
      {/*"Falsy values" */}
      {!name ? <p>Please enter your name to begin your mission.</p> : null}
      {name ? (
        <p>
          Astronaut {name} is headed to {planet}!
        </p>
      ) : null}
      {<p>------------------------------------</p>}
    </div>
  );
}
