import classes from "./TodoList.module.css";

const TodoList = (props) => {
  const removeTodoHandler = (id) => {
    props.onRemoveTodo(id);
  };

  return (
    <div className={classes.card}>
      {props.todos.length > 0 ? (
        <ul>
          {props.todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}{" "}
              <button onClick={() => removeTodoHandler(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Add some tasks...</p>
      )}
    </div>
  );
};

export default TodoList;
