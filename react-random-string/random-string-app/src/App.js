import logo from "./logo.svg";
import "./App.css";

function App() {
  var randomstring = require("randomstring");
  let generatedRandomString = randomstring.generate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        {generatedRandomString}
      </header>
    </div>
  );
}

export default App;
