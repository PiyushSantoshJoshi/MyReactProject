import React from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
  

  switch (action.type) {
    case 'ADD':
      return {
        count: Number(num1.value) + Number(num2.value)

      };
    case 'SUBSTRACT':
      return {
        count: Number(num1.value) - Number(num2.value)
      };

    case 'DIVISION' :
      return {
        count : Number(num1.value) / Number(num2.value)
      };

    case 'MULTIPLICATION' :
      return {
        count: Number(num1.value) * Number(num2.value)
      };

    default:
      return state;
  }
}

function ReducerExmpOne() {
  const initialState = { count: 0, pageName: 'Page 1' };
  const [state, dispatch] = useReducer(reducer, initialState);

  

  return (
    
      <>
      <h1>Small Calculator</h1>
      
      <div className='mb-3'>
        <label className='form-label'>Enter Number 1st : </label>
        <input className='form-control' type="number" id="num1"  placeholder='0'  ></input>
      </div>
      <div className='mb-3'>
      <label className='form-label'>Enter Number 2nd : </label>
      <input className='form-control' type="number" id="num2" placeholder='0'  ></input>
      </div>

      <p className='text-center'>Result : {state.count}</p>

      <div className='row'>
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

export default ReducerExmpOne;