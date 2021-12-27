import React from "react";
import "./Todo.css";
export default function Todos({ type, status }) {
  return (
    <div className="disp">
      <h3>{type}</h3>
      <button>Toggle</button>
    </div>
  );
}
