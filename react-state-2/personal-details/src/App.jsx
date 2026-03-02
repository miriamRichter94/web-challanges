import "./styles.css";
import { useState } from "react";
import Form from "./components/Form";

export default function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("John@Doe.com");
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form setName={setName} setEmail={setEmail} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
