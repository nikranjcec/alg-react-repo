import "./App.css";
import React, { Component } from "react";

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
    </div>
  );
}

export default App;
