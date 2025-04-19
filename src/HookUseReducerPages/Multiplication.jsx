import React from 'react';
import {useState} from 'react';

export default function Multiplication() {

  const [sum, setSum] = useState(0);


    const result = () => {
        const num1 = document.getElementById('num1');
        const num2 = document.getElementById('num2');
        setSum( Number(num1.value) / Number(num2.value));
        
    };

  return (
    <>
    <h1 className='text-center mb-4'>Multiply Operation.</h1>
      
      <div className='mb-3'>
        <label className='form-label'>Enter Number 1st : </label>
        <input className='form-control' type="number" id="num1"  placeholder='0' onChange={result} ></input>
      </div>
      <div className='mb-3'>
      <label className='form-label'>Enter Number 2nd : </label>
      <input className='form-control' type="number" id="num2" placeholder='0' onChange={result} ></input>
      </div>
      <p className='text-center'>Result : {sum}</p>
    </>
  )
}
