import "./App.css";
import { ParnaKomponenta, NeparnaKomponenta } from "./components";
function App() {
  const firstString = "first string";
  const secondString = "second string";

  function returnConcatenatedString(string1, string2) {
    return string1 + " " + string2;
  }

  function returnStringLenght(string) {
    return string.length;
  }

  const uvjet =
    returnStringLenght("asdfg") % 2 === 0 ? (
      <ParnaKomponenta />
    ) : (
      <NeparnaKomponenta />
    );
  return (
    <div className="App">
      <p>Lorem ipsum dorum</p>

      <p>Lorem ipsum dorum, first string = {firstString}</p>

      <p>
        Function result = {returnConcatenatedString(firstString, secondString)}
      </p>

      <h1>Uvjetni prikaz komponenti</h1>

      {uvjet}
    </div>
  );
}

export default App;
