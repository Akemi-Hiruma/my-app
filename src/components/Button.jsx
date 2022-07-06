import React from 'react';

import './Button.css'

import './AddTask.css'

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );  // render button children, in this case, showing the text Add
};
// sfc - shortcut for function component

export default Button;
