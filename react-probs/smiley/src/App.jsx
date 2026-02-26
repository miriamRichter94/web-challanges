export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
    </div>
  );
}

function Smiley({ isHappy }) {
  return <h1>{isHappy ? "😊" : "😟"}</h1>;
}
