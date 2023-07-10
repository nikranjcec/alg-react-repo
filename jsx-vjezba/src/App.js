import "./App.css";

function App() {
  const firstString = "first string";
  const secondString = "second string";

  function returnConcatenatedString(string1, string2) {
    return string1 + " " + string2;
  }

  return (
    <div className="App">
      <p>Lorem ipsum dorum</p>

      <p>Lorem ipsum dorum, first string = {firstString}</p>

      <p>
        Function result = {returnConcatenatedString(firstString, secondString)}
      </p>
    </div>
  );
}

export default App;
