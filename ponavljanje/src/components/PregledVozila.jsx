import React from "react";

function PregledVozila({ vozilo }) {
  return (
    <div>
      Marka: {vozilo.marka} <br></br>
      Tip: {vozilo.tip} <br></br>
      Godiste: {vozilo.godiste} <br></br>
    </div>
  );
}

export default PregledVozila;
