import { useEffect, useReducer } from "react";
import "./styles.css";

function fnReducer(state, action) {
  console.log("state ", state); // Initial Value
  console.log("action ", action); // TEST
  return "Some data";
}
export default function App() {
  const [estado, despachador] = useReducer(fnReducer, "Initial value");

  function handleClick() {
    despachador("TEST");
  }

  useEffect(() => {
    console.log("Valor del state ", estado);
  }, [estado]);

  return (
    <div className="App">
      <h3>Use Reducer</h3>
      <button onClick={handleClick}>Use Dispatch</button>
    </div>
  );
}
