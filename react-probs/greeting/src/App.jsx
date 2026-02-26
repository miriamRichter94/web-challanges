export default function App() {
  return (
    <div>
      <Greeting name="Max" />
      <Greeting name="Feline" />
      <Greeting name="Manuel" />
      <Greeting name="Rohland" />
    </div>
  );
}

function Greeting({ name }) {
  const coaches = ["Rohland", "Feline", "Jakob", "Klaus", "Felix"];
  return <h1>Hello {coaches.includes(name) ? "Coach" : name}</h1>;
}
