import { useState } from "react";
import React from "react";
import Todos from "./Todo";
import "./Todo.css";
export default function Todo() {
  const [query, setQuery] = useState("");
  const [tasks, setTask] = useState([]);

  const handleAdd = () => {
    const payload = {
      type: query,
      status: false
    };

    let newItem = [...tasks, payload];
    setTask(newItem);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="align">
      <h1>Todo List</h1>
      <input
        value={query}
        onChange={handleChange}
        placeholder="Write Something"
      />
      <button onClick={handleAdd}>+</button>
      <div>
        {tasks.map((item) => {
          return (
            <div>
              <Todos {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
