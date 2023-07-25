import React from "react";
import { useState } from "react";

function UnosVozila({ onSubmit }) {
  const [marka, setMarka] = useState("");
  const [tip, setTip] = useState("");

  const saveVozilo = (event) => {
    event.preventDefault();

    let newVozilo = { marka: marka, tip: tip };
    onSubmit({ newVozilo });

    setMarka("");
    setTip("");
  };

  return (
    <form onSubmit={saveVozilo}>
      <p>
        <label>Marka: </label>
        <input
          type="text"
          value={marka}
          onChange={(e) => setMarka(e.target.value)}
        />
      </p>

      <p>
        <label>Tip: </label>
        <input
          type="text"
          value={tip}
          onChange={(e) => setTip(e.target.value)}
        />
      </p>

      <button type="submit">Spremi vozilo</button>
    </form>
  );
}

export default UnosVozila;
