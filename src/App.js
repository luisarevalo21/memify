import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MemePage from "./containers/MemePage";
function App() {
  return (
    <div className="App">
      <h1
        style={{
          color: "#a4acae",
          textAlign: "left",
          padding: "20px"
        }}
      >
        Text to Meme
      </h1>
      <MemePage />
    </div>
  );
}

export default App;
