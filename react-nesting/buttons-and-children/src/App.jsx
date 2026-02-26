import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>was </Button>
      <Button>mache </Button>
      <Button>ich</Button>
      <Button>eigentlich hier?</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
