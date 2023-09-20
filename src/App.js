import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Teddy");

  return <div>{name}</div>;
}
