import { useState } from "react";

import styles from "./Users.module.css";

const Users = (props) => {
  const [deleted, setDeleted] = useState(false);

  const deleteHandler = () => {
    setDeleted(true);
  };

  return (
    <>
      {!deleted && (
        <li className={styles.user} onClick={deleteHandler}>
          <span>{props.name}</span>
          <span>
            {props.age} <span>years old</span>
          </span>
        </li>
      )}
    </>
  );
};

export default Users;
