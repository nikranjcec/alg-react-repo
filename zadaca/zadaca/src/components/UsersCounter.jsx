import React, { useContext } from "react";
import { UserCounterContext } from "../App";

function UsersCounter() {
  const userCount = useContext(UserCounterContext);
  return <div>Trenutni broj korisnika je: {userCount} </div>;
}

export default UsersCounter;
