import Card from "../UI/Card";
import styles from "./UsersList.module.css";
// import UserItem from "./UserItem";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>{ `${item.username} (${item.age} years old)` }</li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
