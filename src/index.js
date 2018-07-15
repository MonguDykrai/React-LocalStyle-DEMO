import React from "react";
import ReactDOM from "react-dom";

import Greeting from './components/Greeting'

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Greeting />
      <h3 className="blue">blue</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
