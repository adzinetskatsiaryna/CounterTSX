import React from 'react';
import './App.css';
type PropsType = {
  title: string
  min: number
  counter:number
  resetCounter:()=>void
}

function ButtonRes(props:PropsType) {

  let disabledRes = props.counter===props.min

  return (
   <button disabled= {disabledRes} onClick={props.resetCounter}>{props.title}</button>
  );
}

export default ButtonRes;