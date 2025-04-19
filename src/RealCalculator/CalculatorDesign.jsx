import React, { useState } from 'react'
import DelCalci from '../assets/Svgfolder/DelCalci.svg'


export default function CalculatorDesign() {
  const [num, setNum] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [op, setOp] = useState('');

  const handleClick = (n) => {
    if (num == 0) {
      setNum(n);
    }
    else {
      setNum(num + "" + n);
    }
  }

  const allClear = () => {
    setNum(0);
  }

  const ClearEnd = () => {
    if (num.length <= 1) {
      setNum(0);
    }
    else {
      setNum(num.slice(0, -1));
    }
  }

  return (
    <>
      <div className='container py-5'>
        <h1 className='text-center'>Calculator</h1>

        <div className='py-2'>
          <div className='p-2 border border-dark rounded'>

            <div className="border border-dark rounded d-flex flex-row mb-3">
              <div className="col-10 p-2 fs-1">{num}</div>
              <button className='col-2 btn btn-outline-light' onClick={() => ClearEnd()}>
                <img src={DelCalci} width={'70%'} />
              </button>
            </div>


            <div className="container">
              <div className='row'>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => allClear()}>AC</button>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick('+')}>+</button>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick('-')}>-</button>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick(0)}>0 </button>

              </div>
              <div className='row mt-2'>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick(9)}>9</button>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick(8)}>8</button>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick(7)}>7</button>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick('/')}>/ </button>
              </div>
              <div className='row mt-2'>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick(6)}>6</button>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick(5)}>5</button>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick(4)}>4</button>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick('X')}>x </button>
              </div>
              <div className='row mt-2'>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick(3)}>3</button>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick(2)}>2</button>
                <button className=' col-3 btn btn-outline-secondary ' onClick={() => handleClick(1)}>1</button>
                <button className=' col-3 btn btn-outline-secondary ' >= </button>
              </div>

            </div>


          </div>

        </div>
      </div>
    </>
  )
}
