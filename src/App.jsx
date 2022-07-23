import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Study React",
      completed: false,
    },
    {
      id: "2",
      title: "Read books",
      completed: true,
    },
    {
      id: "3",
      title: "Apply for jobs",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task)=> {
      if (task.id === taskId) return { ...task, completed: !task.completed }

      return task;
    });

    setTasks(newTasks)
  };



  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks);
  };
  // useState() returns a state, the initial value goes between ()
  // 1st argument: the state itself
  // 2nd argument: the function which update the state //
  return (
    <Router>
      <div className="container">
        <Header />
          <Routes>
            <Route
              path="/"
              exact
              // Only show the content bellow when the path in URL is exactly '/' (the starting page - home))
              element={
              //**Instead of render, used element to work properly
                <>
                  <AddTask handleTaskAddition={handleTaskAddition} />
                  <Tasks
                    tasks={tasks}
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletion={handleTaskDeletion}
                  />
                </>
              }
            />
            <Route path="/:taskTitle" exact render={TaskDetails} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
