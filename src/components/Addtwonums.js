import React from 'react'
import { useState } from 'react';

export default function Addtwonums() {
    const [formData, setFormData]  = useState({ 
                    name : 'abc',
                    rollno : '',
                    physics : '',
                    chemistry : '',
                    total: 0,
                    percentage: 0,
                    grade: 'NA' 
                    
         });
          const handleSubmit = (event) => {
            event.preventDefault();
            
          };
    
         const handleChange = (event) => 
             {
        const { name, value } = event.target;

        // Update the state with the new value first
        setFormData(prevState => {
            const updatedFormData = {
                ...prevState,
                [name]: value
            };

            // If the changed field is physics, chemistry, or maths, recalculate total, percentage, and grade
            if (name === 'physics' || name === 'chemistry' || name === 'maths') {
                const physics = parseFloat(updatedFormData.physics) || 0;
                const chemistry = parseFloat(updatedFormData.chemistry) || 0;
                const maths = parseFloat(updatedFormData.maths) || 0;

                const total = physics + chemistry + maths;
                const percentage = total / 3; // Assuming each subject is out of 100, total marks = 300

                let grade = 'NA';
                if (percentage >= 90) grade = 'A+';
                else if (percentage >= 80) grade = 'A';
                else if (percentage >= 70) grade = 'B+';
                else if (percentage >= 60) grade = 'B';
                else if (percentage >= 50) grade = 'C';
                else if (percentage >= 40) grade = 'D';
                else if (percentage > 0) grade = 'F';

                return {
                    ...updatedFormData,
                    total,
                    percentage: percentage.toFixed(2),
                    grade
                };
            }

            return updatedFormData;
        });
    };
    
  return (
    <>
    <div className='p-5 container'>
    <form onSubmit={handleSubmit}>
    <div className='mb-3' >
      <label className='form-label'>
        Name :
      </label>
      <input 
          className='form-control'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3' >
      <label className='form-label'>
        Roll no. :
      </label>
      <input 
          className='form-control'
          type="number"
          name="rollno"
          value={formData.rollno}
          onChange={handleChange}
        />
      </div>
      <div className='row'>
      <div className='col mb-3' >
      <label className='form-label'>
        Physics:
        <input 
          
          type="number"
          name="physics"
          value={formData.physics}
          onChange={handleChange}
        />
        </label>
      </div>
      <div className='col mb-3'>
      <label className='form-label'>
        Chemistry :
      
      <input
          
          type="number"
          name="chemistry"
          value={formData.chemistry}
          onChange={handleChange}
        />
        </label>
      </div>
      

      <div className='col mb-3'>
      <label className='form-label'>
        Maths :
      
      <input
          
          type="number"
          name="maths"
          value={formData.maths}
          onChange={handleChange}
        />
        </label>
      </div>
      </div>

    <div className='row'>
      <div className='col'>
        <label className='form-label'>
          Total : 
          <input
           type="number"
           name="total"
           value={formData.total}
           
           onChange={handleChange}
          ></input>
        </label>
      </div>
      <div className='col'>
        <label className='form-label'>
          Percentage :
          <input
          type="number"
          name="percentage"
          value={formData.percentage}
          
          onChange={handleChange}
          />
        </label>
      </div>
      <div className='col'>
        <label className='form-label'>
          Grade :
          <input
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          />
        </label>
      </div>
    </div>

      <div className='mt-4 row'>
        <div className='col'></div>
        <button type="submit" className='col btn btn-success' onClick={handleSubmit}>Calculate</button>
        <div className='col'></div>
        <button type="reset" className='col btn btn-danger'>Reset</button>
        <div className='col'></div>
      </div>

    </form>

    </div>
    
    
    </>
  )
}