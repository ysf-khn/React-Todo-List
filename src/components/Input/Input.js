import classes from "./Input.module.css";

import { useRef } from "react";

const Input = (props) => {
  const taskInputRef = useRef();

  const addTodoHandler = (event) => {
    event.preventDefault();
    const inputValue = taskInputRef.current.value;

    if (inputValue.trim().length > 0) {
      props.onAddTodo(inputValue);
    }
    taskInputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={addTodoHandler}>
      <input type="text" ref={taskInputRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
