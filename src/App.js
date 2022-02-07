import { useState } from "react";
import Header from "./components/UI/Header";
import Input from "./components/Input/Input";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoText) => {
    const id = Math.random().toString();
    setTodos((prevState) => [...prevState, { id: id, text: todoText }]);
  };

  const removeTodoHandler = (todoId) => {
    const item = todos.find((todo) => Number(todo.id) === Number(todoId));

    if (todos.includes(item)) {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    }
  };

  return (
    <div className="App">
      <Header />
      <Input onAddTodo={addTodoHandler} />
      <TodoList todos={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
