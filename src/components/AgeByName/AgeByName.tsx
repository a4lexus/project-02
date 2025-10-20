import { useState } from "react";

export default function AgeByName() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [message, setMessage] = useState("");

  //   useEffect(() => {
  //     console.log("Call");
  //   }, [name]);

  function handleFetchAge() {
    fetchAge();
  }
  async function fetchAge() {
    try {
      const res = await fetch(`https://api.agify.io/asd?name=${name}`);
      if (!res.ok) {
        throw new Error("Failed to load age");
      }
      const data = await res.json();
      setAge(data.age);
    } catch (err) {
      if (err instanceof Error) setMessage(err.message);
    }
  }

  return (
    <div>
      <h2>AgeByName</h2>
      <p>{message}</p>      
      <p>
        Age of {name} is {age}
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={handleFetchAge}>
        Get Age By Name
      </button>
    </div>
  );
}
