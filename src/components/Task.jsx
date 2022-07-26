import React from 'react';
// imr - type for shortcut
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useNavigate();
  const handleTaskDetailsClick =() => {
    history(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: '6px solid #D9A693'} : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className='buttons-container'>
        <button
          className='remove-task-button'
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
        <button
          className='view-task-details-button' onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
  // return <div className="task-container">{task.title}</div>;
};
export default Task;
