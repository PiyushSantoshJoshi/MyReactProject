import React from 'react'

export default function Operations({onOperations}) {
  return (
    <>
    <div className='row'>
        <div className='col-4'></div>
        <div className='col-1'>
          <button className='btn btn-success rounded' onClick={() => {onOperations('ADD')}}>
            +
          </button>
        </div>
        <div className='col-1'>
        <button className='btn btn-danger rounded' onClick={() => {onOperations('SUBTRACT')}}>
          -
        </button>
        </div>
        <div className='col-1'>
        <button className='btn btn-success rounded' onClick={() => {onOperations('MULTIPLICATION')}}>
          *
        </button>
        </div>
        <div className='col-1'>
          <button className='btn btn-danger rounded' onClick={() => {onOperations('DIVIDE')}}>
            /
          </button>
        </div>
        <div className='col-4'></div>
      </div>
    </>
  )
}
