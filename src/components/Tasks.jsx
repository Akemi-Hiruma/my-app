import React from "react";

import Task from "./Task";

const Tasks = ( {tasks, handleTaskClick, handleTaskDeletion} ) => {
//  tasks are inside of prop object
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
          />
      ))}
    </>
  )
};


export default Tasks;
