import "./App.css";
import { useState, createContext } from "react";
import UsersHeader from "./components/UsersHeader";
import UsersRow from "./components/UsersRow";
import UsersForm from "./components/UsersForm";
import UsersCounter from "./components/UsersCounter";
export const UserCounterContext = createContext(0);

function App() {
  let users = [
    { id: 1, name: "Nikola", surname: "Kranjcec" },
    { id: 2, name: "Pero", surname: "Peric" },
    { id: 3, name: "Ana", surname: "Anic" },
  ];

  const [stateUsers, setStateUsers] = useState(users);
  const [userCount, setUserCount] = useState(stateUsers.length);
  const saveUser = ({ newUser }) => {
    console.log("", newUser);
    setStateUsers([...stateUsers, newUser]);
    setUserCount([...stateUsers].length + 1);
  };
  return (
    <div className="App">
      <div>
        <UsersForm onUserSubmit={saveUser} />
      </div>
      <table>
        <UsersHeader />
        <tbody>
          {stateUsers.map((user, index) => (
            <tr key={user.id}>
              <UsersRow user={user} />
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <UserCounterContext.Provider value={userCount}>
          <UsersCounter />
        </UserCounterContext.Provider>
      </div>
    </div>
  );
}

export default App;
