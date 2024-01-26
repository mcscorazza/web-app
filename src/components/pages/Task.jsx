import React from "react";

export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}> {task.name} - {task.function} </li>
      ))}
    </ul>
  );
}
