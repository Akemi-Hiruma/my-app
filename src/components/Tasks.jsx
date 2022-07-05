import React from "react";

import Task from "./Task";

const Tasks = ( {tasks} ) => {
//  tasks estão dentro do objeto prop
  return (
    <>
      {tasks.map( (task) => (
        <Task task={task} />
      ))}
    </>
  )
};


export default Tasks;
