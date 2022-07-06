import React from 'react';
import './Button.css'

const Button = ({children, onClick}) => {
  return <button onClick={onClick} className="button">{children}</button>
    // render button children, in this case, showing the text Add
};
// sfc - shortcut for function component

<Button>Add</Button>
export default Button;
