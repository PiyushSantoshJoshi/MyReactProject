import React from 'react';
import { useReducer } from 'react';
import Addition from './Addition';
import Substraction from './Substraction';
import Multiplication from './Multiplication';
import Division from './Division';

function reducer(state, action) {
  

  switch (action.type) {
    case 'ADD':
      return (
        <Addition />
        
      );
    case 'SUBSTRACT':
      return (
        <Substraction/>
      );

    case 'DIVISION' :
      return (
        <Division/>
      );

    case 'MULTIPLICATION' :
      return (
        <Multiplication/>
      );

    default:
      return state;
  }
}

function ReducerExmp() {
  const initialState = { count: 1, pageName: 'Page 1' };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    
      <>
      <div className='row'>
        <h1 className='mb-3 text-center'>Navigate To desired Operation.</h1>
        <div className='col-4'></div>
        <div className='col-1'>
          <button className='btn btn-success rounded' onClick={() => dispatch({ type: 'ADD' })}>
            +
          </button>
        </div>
        <div className='col-1'>
        <button className='btn btn-danger rounded' onClick={() => dispatch({ type: 'SUBSTRACT' })}>
          -
        </button>
        </div>
        <div className='col-1'>
        <button className='btn btn-success rounded' onClick={() => dispatch({ type: 'MULTIPLICATION' })}>
          *
        </button>
        </div>
        <div className='col-1'>
          <button className='btn btn-danger rounded' onClick={() => dispatch({ type: 'DIVISION' })}>
            /
          </button>
        </div>
        <div className='col-4'></div>
      </div>
      
      
      </>
      
    
  )
}

export default ReducerExmp;