import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Display from "./Display";
import Button from "./Button";
import Input from "./Input";

function App() {

    let[counter, setCounter]=useState(0);
    let[maxValue, setMaxValue]=useState(5);
    let[minValue, setMinValue]=useState(0);
    let[onSet, setOnset]=useState(false);

    let addCounter = ()=>{
        let newCounter = counter+1;
        if(counter<maxValue){
           setCounter(newCounter)
        }
    };

    let resetCounter = ()=>{
        setCounter(minValue)
    };

    let onSetMaxValue=(e:ChangeEvent<HTMLInputElement>)=>{
       let newMaxValue= Number(e.currentTarget.value);
        setMaxValue(newMaxValue);
        setOnset(false)
    };

    let onSetMinValue=(e:ChangeEvent<HTMLInputElement>)=>{
        let newMinValue=Number(e.currentTarget.value);
        setMinValue(newMinValue);
        setOnset(false)
    };

    let onSetChanged = ()=>{
        setCounter(minValue);
        setOnset(true)
    };

    let disabledReset = counter === minValue || onSet === false;
    let disabledAdd = counter === maxValue || onSet === false;


    let errorForMaxValue = maxValue < 0 || maxValue <= minValue;
    let errorForMinValue = minValue < 0 || minValue >= maxValue;
    let errorInput = (errorForMaxValue || errorForMinValue) ? 'errorInput' : '';

  return (
      <div className="App">
          <div className='settings'>
              <div className='inputSettings'>
                  <Input value={maxValue} onChange={onSetMaxValue} title='Max Value' className={errorInput}/>
                  <Input value={minValue} onChange={onSetMinValue} title='Min Value' className={errorInput}/>
              </div>
          </div>
          <div className='counter'>
              <Display
                  counter={counter}
                  maxValue={maxValue}
                  minValue={minValue}
                  errorForMaxValue={errorForMaxValue}
                  errorForMinValue={errorForMinValue}
                  onSet={onSet}
              />
              <div className='buttons'>
                  <Button onClick={addCounter} title='ADD' disabled={disabledAdd}/>
                  <Button onClick={resetCounter} title='RESET' disabled={disabledReset}/>
                  <Button onClick={onSetChanged} title="SET"
                          disabled={onSet === true || errorForMinValue || errorForMaxValue}/>
              </div>
          </div>
      </div>
  );
}

export default App;
