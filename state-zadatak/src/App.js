import React, { useState } from "react";
import { Komponenta1, Komponenta2, Komponenta3, Button } from "./components";

function App() {
  let users = [
    { name: "Boris", age: 28 },
    { name: "Ana", age: 35 },
    { name: "Bob", age: 55 },
  ];

  const randomText = "random tekst";
  const [stateUsers, setUsers] = useState(users);

  function hendleClick() {
    let newUsers = [...stateUsers];
    newUsers[0].age = newUsers[0].age + 1;

    console.log(newUsers);
    setUsers(newUsers);
  }

  function changeName(newName) {
    console.log(newName);
    let newUsers = [...stateUsers];
    newUsers[0].name = newName;

    console.log(newUsers);
    setUsers(newUsers);
  }

  return (
    <div className="App">
      <Komponenta1 name={stateUsers[0].name} age={stateUsers[0].age} />

      <Button text="Dodaj godine" hendleClick={hendleClick} />
      <input
        value={stateUsers[0].name}
        onChange={(e) => changeName(e.target.value)}
      ></input>
      <Komponenta2 name={stateUsers[1].name} age={stateUsers[1].age} />
      <Komponenta3 name={stateUsers[2].name} age={stateUsers[2].age}>
        <p>{randomText}</p>
      </Komponenta3>
    </div>
  );
}

export default App;
