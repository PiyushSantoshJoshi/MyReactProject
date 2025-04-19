import React from 'react'

export default function Incdec() {
    
    const [count, setCount] = React.useState(0);

    const  inc = () => {
        setCount(count+1);
        console.log(count);
    }

    const dec = () => {
        setCount(count-1);
    }

  return (
    <>
    <div className='p-5'>
        <h1 >{count}</h1>
        <button className='btn btn-success' onClick={inc}>Increment</button>
        <button className='btn btn-danger' onClick={dec}>Decrement</button>
    </div>
    
    </>
  )
}
