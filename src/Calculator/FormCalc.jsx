import React from 'react'

export default function FormCalc({values ,handleInputChange}) {
  return (
    <>
    <div className="mb-3">
      <input 
      className='form-control' 
      type="number" 
      name="a"
      value={values.a}  
      placeholder='0' 
      onChange={handleInputChange}
      />
    </div>
    <div className='mb-3'>
      <input 
      className='form-control' 
      type="number" 
      name="b"
      value={values.b}  
      placeholder='0' 
      onChange={handleInputChange}
      />
    </div>
    
    </>
    
  )
}
