import React from "react";

function User({ ime, changeName }) {
  return (
    <div>
      Ime: {ime}
      <input type="text" value={ime} onChange={changeName}></input>
    </div>
  );
}

export default User;
