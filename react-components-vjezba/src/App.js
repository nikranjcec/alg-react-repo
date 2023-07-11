import "./App.css";
import React, { Component } from "react";
import { FuncComponent2, FuncComponent1, ClassComponent } from "./components";

const randomArr = [5, 88, 54, 6, 33];

function getMaxNum(arr) {
  return arr.sort()[arr.length - 1];
}

class FirstComponent extends Component {
  render() {
    return <div>Tekst prve komponente.</div>;
  }
}

function SecondComponent() {
  return <div>Max number: {getMaxNum(randomArr)}</div>;
}

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent />

      <h3 style={{ color: "red" }}>Drugi dio zadatka</h3>

      <h3 style={{ color: "blue" }}>
        Funkcijska s class komponentom unutar nje
      </h3>
      <FuncComponent1 />

      <h3 style={{ color: "blue" }}>Funkcijska samostalno</h3>
      <FuncComponent2 />

      <h3 style={{ color: "blue" }}>Class komponenta samostalno</h3>
      <ClassComponent />

      <h3 style={{ color: "blue" }}>Komponenta koja se ne vidi</h3>
      {getMaxNum(randomArr) % 2 === 1 && <FuncComponent2 />}
    </div>
  );
}

export default App;
