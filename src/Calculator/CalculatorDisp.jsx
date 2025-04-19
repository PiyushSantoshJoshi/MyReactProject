import React from 'react'
import { useReducer } from 'react'
import { initialState,reducer } from './CalculatorReducer'
import FormCalc from './FormCalc';
import Operations from './Operations';
import Result from './Result';

export default function CalculatorDisp() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE', name, value });
      };
    
      const handleOperation = (type) => {
        dispatch({ type });
      };
    


  return (
    <>
    <div className='container'>
        <FormCalc values={state} handleInputChange={handleInputChange}/>
        <Result Result={state.c}/>
        <Operations Onoperation={handleOperation}/>
    </div>

    </>
  )
}
