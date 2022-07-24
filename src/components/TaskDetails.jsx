import React from 'react';
import { useParams } from 'react-router-dom';

import Button from "./Button";


const TaskDetails = () => {
  const params = useParams()
  // return the params we use in URL
  console.log(params);

  return (
    <>
      <div className='back-button-container'>
        <Button>Back</Button>
      </div>
      <div className='task-details-container'>
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sint nam dolor fugit nostrum dolorum porro?
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
