import React from 'react';

import Button from "./Button";

const TaskDetails = () => {
  return (
    <>
      <div className='back-button-container'>
        <Button>Back</Button>
      </div>
      <div className='task-details-container'>
        <p></p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sint nam dolor fugit nostrum dolorum porro?
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
