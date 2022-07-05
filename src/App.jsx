import React, { useState } from 'react';
import Tasks from './components/Tasks';
import './App.css';

const App = () => {
  // let [message = 'Hello World!'
  //diferently de
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
  // useState() returns a state, the initial value goes between ()
  // 1st argument: the state itself
  // 2nd argument: the function which update the state //
  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};
// const App = () => {
  //   return (
    //     <h1>hello world!</h1>
    //   )
    //
export default App
