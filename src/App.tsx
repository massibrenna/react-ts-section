import React from "react";
import "./App.css";
import ITodo from "./interfaces/ITodo";
import ITodos from "./interfaces/ITodos";
import AddTodoComponent from "./components/AddTodoComponent";
import TodosComponent from "./components/TodosComponent";

const App = () => {
  const [todos, setTodos] = React.useState<ITodos>({ todos: [] });
  const addTodos = (title: string) => {
    setTodos({
      todos: [
        { title, completed: false, id: todos.todos.length + 1 },
        ...todos.todos,
      ],
    });
  };
  const deleteTodos = (id: number) => {
    setTodos({
      todos: todos.todos.filter((t) => t.id !== id),
    });
  };
  const toggleTodos = (id: number) => {
    setTodos({
      todos: todos.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  return (
    <>
      <div className="App">
        <AddTodoComponent addTodos={addTodos} />
        <hr />
        <TodosComponent
          todos={todos}
          toggleTodos={toggleTodos}
          deleteTodos={deleteTodos}
        />
      </div>
    </>
  );
};

export default App;
