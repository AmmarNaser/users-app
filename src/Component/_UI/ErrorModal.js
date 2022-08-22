import React from "react";
import Button from "./Button";
import Card from "./card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div
        onClick={props.onDone}
        className={styles.backdrop}
      />
      <Card className={styles.modal}>
        <header className={styles.header}>
          {props.title}
        </header>
        <div className={styles.content}>
          {props.massege}
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onDone}>ok</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
