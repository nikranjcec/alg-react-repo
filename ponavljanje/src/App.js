import { useState } from "react";
import PregledVozila from "./components/PregledVozila";
import UnosVozila from "./components/UnosVozila";

function App() {
  let vozila = [
    { id: 1, marka: "Mazda", tip: "3", godiste: "2021" },
    { id: 2, marka: "Golf", tip: "7", godiste: "2020" },
    { id: 3, marka: "Ford", tip: "Focus", godiste: "2017" },
  ];

  const [stateVozila, setStateVozila] = useState(vozila);

  const saveVozilo = ({ newVozilo }) => {
    newVozilo.id = stateVozila.length + 1;
    setStateVozila([...stateVozila, newVozilo]);
  };

  return (
    <div className="App">
      <h1>Unos Vozila</h1>
      <UnosVozila onSubmit={saveVozilo} />
      <h1>Pregled vozila</h1>

      <ul>
        {stateVozila.map((vozilo) => (
          <li key={vozilo.id}>
            <PregledVozila vozilo={vozilo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
