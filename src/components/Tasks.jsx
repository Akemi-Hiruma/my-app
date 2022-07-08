import React from "react";

import Task from "./Task";

const Tasks = ( {tasks, handleTaskClick} ) => {
//  tasks estão dentro do objeto prop
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} handleTaskClick={handleTaskClick} />
      ))}
    </>
  )
};


export default Tasks;
