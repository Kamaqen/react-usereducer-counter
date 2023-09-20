import { useEffect, useReducer, useState } from "react";

function reducer() {
  return null;
}
export default function App() {
  // const [name, setName] = useState("Teddy");

  const [state, dispatch] = useReducer(reducer, "Initial value");

  useEffect(() => {
    console.log("Current state:", state);
  }, [state]);

  return <div></div>;
}
