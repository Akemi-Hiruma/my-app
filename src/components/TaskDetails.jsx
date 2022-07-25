import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// hook
import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams()
  // return the params that we are using at the URL
  const history = useNavigate();
  const handleBackButtonClick =() => {
    history(-1);
  };

  return (
    <>
      <div className='back-button-container'>
        <Button onClick={handleBackButtonClick}>Back</Button>
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
