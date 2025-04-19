import React from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'PLUS':
      return {
        ...state,
        c: parseFloat(state.a) + parseFloat(state.b),
      };
    case 'SUB':
      return {
        ...state,
        c: parseFloat(state.a) - parseFloat(state.b),
      };
    case 'MUL':
      return {
        ...state,
        c: parseFloat(state.a) * parseFloat(state.b),
      };
    case 'DIV':
      return {
        ...state,
        c: parseFloat(state.b) !== 0 ? parseFloat(state.a) / parseFloat(state.b) : 'Error: Division by zero',
      };
    case 'UPDATE':
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}

function ReducerExmpTwo() {
  const values = { a: 0, b: 0, c: 0 };
  const [state, dispatch] = useReducer(reducer, values);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE', name, value });
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        className='mb-3 form-control'
        type="number"
        name="a"
        value={state.a}
        onChange={handleInputChange}
        placeholder="Enter Number 1"
      />
      <input
      className='mb-3 form-control'
        type="number"
        name="b"
        value={state.b}
        onChange={handleInputChange}
        placeholder="Enter Number 2"
      />
      <p>Ans: {state.c}</p>
      <button onClick={() => dispatch({ type: 'PLUS' })}>+</button>
      <button onClick={() => dispatch({ type: 'SUB' })}>-</button>
      <button onClick={() => dispatch({ type: 'MUL' })}>*</button>
      <button onClick={() => dispatch({ type: 'DIV' })}>/</button>
    </div>
  );
}

export default ReducerExmpTwo;