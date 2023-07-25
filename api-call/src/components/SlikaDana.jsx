import React from "react";
import { useState, useEffect } from "react";

function SlikaDana() {
  const [slikaDana, setSlikaDana] = useState(null);

  const getSlikaDana = () => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => res.json())
      .then((data) => {
        console.log("", data);
        setSlikaDana(data);
      });
  };

  useEffect(() => {
    getSlikaDana();
  }, []);

  return (
    <div>
      {slikaDana && (
        <>
          <h1>{slikaDana.title}</h1>
          <p>{slikaDana.explanation}</p>
          <img src={slikaDana.url} alt={slikaDana.explanation} />
        </>
      )}
    </div>
  );
}

export default SlikaDana;
