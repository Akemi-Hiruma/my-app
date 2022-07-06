import React from 'react';
// imr - type for shortcut
import "./Task.css";

const Task = ({task}) => {
  return <div className="task-container">{task.title}</div>;
};
export default Task;
