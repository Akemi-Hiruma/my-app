import React, { useState } from 'react';

import './App.css'
const App = () => {
  // let [message = 'Hello World!'
  //diferently de
  const [message, setMessage] = useState("click to test");
 // useState() returns a state, the initial value goes between ()
// 1st argument: the state itself
// 2nd argument: the function which update the state //
  return (
    <>
      <div className="container">{message}</div>
      <button onClick={() => setMessage("test successful")}>
        click to change message
      </button>
    </>
  );
};
// const App = () => {
  //   return (
    //     <h1>hello world!</h1>
    //   )
    //
export default App
