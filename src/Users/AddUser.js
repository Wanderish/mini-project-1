import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //username & age length validation
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    //age validation
    if (+age < 1) {
      return;
    }

    let newUserData = {
      username: username,
      age: age,
    };

    props.onAddUser(newUserData);
    setUsername("");
    setAge("");
  };

  return (
    <Card className={styles.input}>
      <form action="" onSubmit={formSubmitHandler}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            id="username"
            onChange={usernameHandler}
            value={username}
          />
        </label>
        <label htmlFor="age">
          Age (Years)
          <input
            type="number"
            name="age"
            id="age"
            onChange={ageHandler}
            value={age}
          />
        </label>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
