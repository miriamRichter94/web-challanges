import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "strawberry",
      color: "red",
    },
    {
      id: 3,
      name: "Carrot",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <li id={fruit.id}>
          <Card name={fruit.name} color={fruit.color} />
        </li>
      ))}
    </div>
  );
}
