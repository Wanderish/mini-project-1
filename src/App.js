import { useState } from "react";

import React from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
    { username: "SD", age: 23, id: "u1" },
    { username: "Maverick", age: 20, id: "u2" },
  ]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        {
          username: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList items={usersList} />
    </div>
  );
}

export default App;
