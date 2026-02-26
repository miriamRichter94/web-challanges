export default function App() {
  return (
    <div>
      <Sum valueA={3} valueB={4} />
      <Sum valueA={8} valueB={3} />
      <Sum valueA={2} valueB={6} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return <h1>{`${valueA} + ${valueB} = ${valueA + valueB}`}</h1>;
}
