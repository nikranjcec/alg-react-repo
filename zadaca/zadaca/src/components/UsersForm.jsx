import React from "react";
import { useState } from "react";

function UsersForm({ onUserSubmit }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const saveUser = (event) => {
    event.preventDefault();

    let newUser = { id: id, name: name, surname: surname };
    onUserSubmit({ newUser });

    setId("");
    setName("");
    setSurname("");
  };

  return (
    <form onSubmit={saveUser}>
      <p>
        <label>Id: </label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </p>

      <p>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>

      <p>
        <label>Surname: </label>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </p>

      <button type="submit">Spremi korisnika</button>
    </form>
  );
}

export default UsersForm;
