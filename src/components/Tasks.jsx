import React from "react";

import Task from "./Task";

const Tasks = ( {tasks, handleTaskClick, handleTaskDeletion} ) => {
//  tasks estão dentro do objeto prop
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
          />
      ))}
    </>
  )
};


export default Tasks;
