import { useState } from "react";
import logo from "./commit.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="app">
      <h1>
        Hola React
        <img src={logo} width="25" alt="commit studio logo" />
      </h1>
      <div>
        <label htmlFor="name">Nombre: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
