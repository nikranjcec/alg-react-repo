import React from "react";
import { PropTypes } from "prop-types";

function PropTypeComp({ marka, model, boja, godina, mjenjac }) {
  return (
    <div>
      <p>Marka: {marka}</p>
      <p>Model: {model}</p>
      <p>Boja: {boja}</p>
      <p>Godina: {godina}</p>
      <p>Mjenjac: {mjenjac === "A" ? "Automatski" : "Rucni"}</p>
    </div>
  );
}

PropTypeComp.propTypes = {
  marka: PropTypes.string.isRequired,
  model: PropTypes.string,
  boja: PropTypes.number,
  mjenjac: PropTypes.oneOf(["A", "R"]),
  godina: PropTypes.number,
};

PropTypeComp.defaultProps = {
  mjenjac: "R",
};

export default PropTypeComp;
