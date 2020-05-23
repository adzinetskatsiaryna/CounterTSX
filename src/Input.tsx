import React from 'react';
import './App.css';
type PropsType = {
 onClick:()=> void
  title: string
  disabled: boolean
}


function Button(props:PropsType) {

  return (
   <button onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
  );
}

export default Button;