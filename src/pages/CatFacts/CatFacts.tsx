import useCatFact from "../../hooks/useCatFact";

export default function CatFacts() {
  const { fact } = useCatFact();
  return (
    <div>
      CatFacts
      <p>{fact}</p>
    </div>
  );
}
