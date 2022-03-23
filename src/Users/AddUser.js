import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

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
      setError({
        title: 'Invalid input',
        msg: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }

    //age validation
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        msg: 'Please enter a valid age (>0).'
      })
      return;
    }

    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  const errorhandler = () => {
    setError(null)
  }


  return (
    <div>
      {error && <ErrorModal title={error.title} msg={error.msg} onModalOkayClick={errorhandler} />}
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
    </div>
  );
};

export default AddUser;
