import React from "react";

function UsersRow({ user }) {
  console.log("", user);
  return (
    <>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.surname}</td>
    </>
  );
}

export default UsersRow;
