import React, { useState } from "react";
import User from "./components/User";

function App() {
  let users = [
    { name: "Boris", id: 1 },
    { name: "Ana", id: 2 },
    { name: "Bob", id: 3 },
  ];

  const [stateUsers, setUsers] = useState(users);

  function changeName(e, index) {
    console.log(index);
    console.log(e);
    let newUsers = [...stateUsers];
    newUsers[index].name = e.target.value;

    setUsers(newUsers);
  }

  return (
    <div className="App">
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            <User
              ime={user.name}
              changeName={(event) => changeName(event, index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
