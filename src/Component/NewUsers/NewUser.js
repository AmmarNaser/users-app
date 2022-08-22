import React, { useState } from "react";
import Button from "../_UI/Button";
import Card from "../_UI/card";
import ErrorModal from "../_UI/ErrorModal";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [entredName, setEntredName] = useState("");
  const [enterdAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const nameChangeHandler = (e) => {
    setEntredName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      entredName.trim().length === 0 ||
      enterdAge.trim().length === 0
    ) {
      setError({
        title: "in valid input",
        massege: "name or age is invalid",
      });
      return;
    }
    if (+enterdAge < 1) {
      setError({
        title: "age is required",
        massege: "input your age",
      });
      return;
    }
    const userInfo = {
      name: entredName,
      age: +enterdAge,
      id: Math.random().toString(),
    };
    props.onSave(userInfo);
    setEntredName("");
    setEnteredAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          onDone={errorHandler}
          title={error.title}
          massege={error.massege}
        />
      )}
      <Card className={styles.master}>
        <form onSubmit={submitHandler}>
          <div>
            <label hidden>UserName</label>
            <input
              className={styles.input1}
              placeholder="Name"
              type={"text"}
              value={entredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div>
            <label hidden>UserAge</label>
            <input
              placeholder="age"
              type={"number"}
              value={enterdAge}
              onChange={ageChangeHandler}
            />
          </div>
          <Button type="submit">submit</Button>
        </form>
      </Card>
    </>
  );
};

export default NewUser;
