import React from 'react'
import { useState } from 'react';

export default function AddStudent({ addItem }) {
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    physics: '',
    chemistry: '',
    maths: '',
    english: '',
    socialscience: '',
    total: '',
    percentage: '',
    grade: 'NA'

  });
  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(formData)

  };

  const handleReset =(event) => {
    setFormData({
      name: '',
      rollno: '',
      physics: '',
      chemistry: '',
      maths: '',
      english: '',
      socialscience: '',
      total: '',
      percentage: '',
      grade: 'NA'

    });

  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the state with the new value first
    setFormData(prevState => {
      const updatedFormData = {
        ...prevState,
        [name]: value
      };

      // If the changed field is physics, chemistry, or maths, recalculate total, percentage, and grade
      if (name === 'physics' || name === 'chemistry' || name === 'maths' || name === 'english' || name === 'socialscience') {
        const physics = parseFloat(updatedFormData.physics) || 0;
        const chemistry = parseFloat(updatedFormData.chemistry) || 0;
        const maths = parseFloat(updatedFormData.maths) || 0;
        const english = parseFloat(updatedFormData.english) || 0;
        const socialscience = parseFloat(updatedFormData.socialscience) || 0;


        const total = physics + chemistry + maths + english + socialscience;
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
      <div className='p-4 border rounded'>
      <form onSubmit={handleSubmit}>
        <h1 className='mb-4 text-center'>Add Student</h1>
          <div className='row'>
            <div className='col-6'><div className='mb-3' >
              <input
                className='form-control'
                type="text"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
              />
            </div></div>
            <div className='col-6'><div className='mb-3' >
              <input
                className='form-control'
                type="number"
                name="rollno"
                placeholder='Roll'
                value={formData.rollno}
                onChange={handleChange}
              />
            </div></div>
          </div>


          <div className='row'>
            <div className=' col-4 mb-3' >
              <label className='form-label'>

                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    name="physics"

                    placeholder='Physics'
                    value={formData.physics}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className=' col-4 mb-3'>
              <div >
                <label className='form-label'>

                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      name="chemistry"

                      placeholder='Chemistry'
                      value={formData.chemistry}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
            </div>


            <div className=' col-4 mb-3'>
              <div>
                <label className='form-label'>

                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      name="maths"
                      placeholder='Maths'
                      value={formData.maths}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
            </div>

          </div>

          <div className='row'>
            <div className=' col-6 mb-3'>
              <div>
                <label className='form-label'>

                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      name="english"
                      placeholder='English'
                      value={formData.english}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className=' col-6'>
              <div>
                <label className='form-label'>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      name="socialscience"
                      placeholder='Social Science'
                      value={formData.socialscience}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>


          <div className='row'>
            <div className='col-4'>
              <label className='form-label'>
                <div className="input-group">
                  <div className="input-group-text">Total :</div>
                  <input
                    type="text"
                    className="form-control"
                    name="total"
                    value={formData.total}
                    placeholder='0'
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className='col-4'>
              <label className='form-label'>
                <div className="input-group">
                  <div className="input-group-text">Percentage :</div>
                  <input
                    type="text"
                    className="form-control"
                    name="percentage"
                    value={formData.percentage}
                    placeholder='0'
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className='col-4'>
              <label className='form-label'>
                <div className="input-group">
                  <div className="input-group-text">Grade :</div>
                  <input
                    type="text"
                    className="form-control"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className='col-6'></div>
          </div>

          <div className='mt-4 row'>
            <div className='col'></div>
            <button type="submit" className='col btn btn-success' >Add Student</button>
            <div className='col'></div>
            <button type="reset" className='col btn btn-danger' onClick={handleReset}>Reset</button>
            <div className='col'></div>
          </div>

        </form>
      </div>
    </>
  )
}