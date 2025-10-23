import { useState, useEffect } from "react";

export default function useCatFact() {
  const [fact, setFact] = useState("");

  async function fetchFact() {
    const res = await fetch("https://meowfacts.herokuapp.com");
    const { data } = await res.json();
    setFact(data[0]);
  }

  useEffect(() => {
    fetchFact();
  }, []);
  return { fact };
}
