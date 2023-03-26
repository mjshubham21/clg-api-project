import React, { useState, useEffect } from "react";
const API_BASE = "http://localhost:5173";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodos] = useState("");
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    fetch(API_BASE + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error: ", err));
  };

  const completeTodo = async (id) => {
    const data = await fetch(API_BASE + "/todo/complete" + id).then((res) =>
      res.json()
    );

    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === data._id) {
          todo.complete = data.complete;
        }
        return todo;
      })
    );
  };

  const deleteTodo = async (id) => {
    const data = await fetch(API_BASE + "todo.delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());

    setTodos((todos) => todos.filter(todo._id !== data._id));
  };

  return (
    <>
      <div className="app">
        <h1>Welcome, mj...</h1>
        <h4>Your Tasks...</h4>
        <div className="todos">
          {todos.map((todo) => (
            <div
              className={"todo" + (todo.complete ? "is-complete" : "")}
              key={todo._id}
              onClick={() => completeTodo(todo._id)}
            >
              <div className="checkbox"></div>

              <div className="text">{todo.text}</div>

              <div className="delete-todo" onClick={() => deleteTodo}>
                x
              </div>
            </div>
          ))}
        </div>
        <div className="addPopup" onClick={setPopupActive(true)}>+</div>
      </div>
    </>
  );
}

export default App;
