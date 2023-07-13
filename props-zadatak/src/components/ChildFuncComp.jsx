import React from "react";

function ChildFuncComp(props) {
  return (
    <div>
      <h1>Child func component</h1>
      <p>Ime: {props.ime}</p>
      <p>Dob: {props.dob}</p>
    </div>
  );
}

export default ChildFuncComp;
