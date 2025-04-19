import React from 'react'
import {useState} from 'react'

export default function Dataform({addItem}) {
    const [formData, setFormData]  = useState({ 
                name: '', 
                rollno:'' , 
                physics: '', 
                chemistry: '', 
                maths: '', 
                english: '', 
                socialscience: '' 
     });

     const handleChange = (event) => {
        const { name, value, type, checked, files } = event.target;
        if (type === 'checkbox' && name === 'preferences') {
          const newPreferences = formData.preferences.includes(value)
            ? formData.preferences.filter(item => item !== value)
            : [...formData.preferences, value];
          setFormData(prevState => ({
            ...prevState,
            [name]: newPreferences
          }));
        } else if (type === 'range') { // Slider
          setFormData(prevState => ({
            ...prevState,
            [name]: parseInt(value, 10)
          }));
        } else {
          setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
          }));
        }
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        addItem({
            'name' : formData.name,
            'rollno' : formData.rollno,
            'physics' : formData.physics,
            'chemistry' : formData.chemistry,
            'maths' : formData.maths,
            'english' : formData.english,
            'socialscience' : formData.socialscience,
        })
      };
    
  return (
    <>
     <form onSubmit={handleSubmit}>
      <div className='mb-3' >
      <label className='form-label'>
        Name:
      </label>
      <input 
          className='form-control'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
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
      <div className='mb-3'>
      <label className='form-label'>
        Physics Marks :
        
      </label>
      <input
          className='form-control'
          type="number"
          name="physics"
          value={formData.physics}
          onChange={handleChange}
        />
      </div>
      
      <div className='mb-3'>
      <label className='form-label'>
        Chemistry Marks:
      </label>
      <input
          className='form-control'
          type="number"
          name="chemistry"
          value={formData.chemistry}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
      <label className='form-label'>
        Maths Marks:
        
      </label>
      <input
          className='form-control'
          type="number"
          name="maths"
          value={formData.maths}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
      <label className='form-label'>
        English Marks:
        
      </label>
      <input
          className='form-control'
          type="number"
          name="english"
          value={formData.english}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
      <label className='form-label'>
        Social Science Marks :
        
      </label>
      <input
          className='form-control'
          type="number"
          name="socialscience"
          value={formData.socialscience}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className='btn btn-success' onClick={handleSubmit}>Add Student</button>
    </form>

    
    </>
  )
}
