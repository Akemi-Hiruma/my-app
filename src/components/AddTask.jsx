import { useState } from 'react';

import Button from './Button';

import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
    // handle is a convention on react for functions passed to onChange (it 'handles' the changes that onChange will be submited)
    setInputData(e.target.value);
    //(e) is not called directly on handleInputChange because we only want it to be called when there's something is typed on input
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData("");
  };

  return (
      <div className="add-task-container">
        <input
          onChange={handleInputChange}
          value={inputData}
          // onChange is a property of input, which is executed whenever the input value is changed
          className="add-task-input"
          type="text"
        />
        <div className="add-task-button-container">
          <Button onClick={handleAddTaskClick}>Add</Button>
        </div>
      </div>
    );
};

export default AddTask;
