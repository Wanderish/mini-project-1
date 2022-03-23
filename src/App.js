import { useState } from "react";

import React from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
    { username: "SD", age: 23, id: "u1" },
    { username: "Maverick", age: 20, id: "u2" }
  ]);

  const addUserHandler = (enteredUser) => {
    console.log(enteredUser);
    setUsersList((prevUsers) => {
      const updatedUsersList = [...prevUsers];
      updatedUsersList.unshift({
        username: enteredUser.username,
        age: enteredUser.age,
        id: Math.random().toString()
      });
      return updatedUsersList;
    });
  };

  let content = <p>No users found. Maybe add one? :)</p>;

  if (usersList.length > 0) {
    content = <UsersList items={usersList} />;
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {content}
    </div>
  );
}

export default App;
