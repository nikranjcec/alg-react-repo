import React from "react";
import ChildFuncComp from "./ChildFuncComp";
import ChildClassComp from "./ChildClassComp";

function ParentFuncComp() {
  return (
    <div>
      <h1>Parent component</h1>
      <ChildFuncComp ime="Nikola" dob={32} />
      <ChildClassComp grad="Krapina" />
    </div>
  );
}

export default ParentFuncComp;
