import React, { useEffect } from 'react';
import { useState } from 'react';

export default function UpdateStudent({ selectedStudent, updateStudent }) {
    const [formData, setFormData] = useState(selectedStudent || {});

    // Sync formData with selectedStudent when it changes
    useEffect(() => {
        setFormData(selectedStudent || {});
    }, [selectedStudent]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateStudent(formData);
    };
    

    const handleReset = () => {
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
            grade: ''
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevState) => {
            const updatedFormData = {
                ...prevState,
                [name]: value,
            };

            if (name === 'physics' || name === 'chemistry' || name === 'maths' || name === 'english' || name === 'socialscience') {
                const physics = parseFloat(updatedFormData.physics) || 0;
                const chemistry = parseFloat(updatedFormData.chemistry) || 0;
                const maths = parseFloat(updatedFormData.maths) || 0;
                const english = parseFloat(updatedFormData.english) || 0;
                const socialscience = parseFloat(updatedFormData.socialscience) || 0;

                const total = physics + chemistry + maths + english + socialscience;
                const percentage = total / 5; // Corrected to 5 subjects (out of 500)

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
                    grade,
                };
            }

            return updatedFormData;
        });
    };

    return (
        <>
            <div className="p-4 border rounded">
                <form onSubmit={handleSubmit}>
                    <h1 className="mb-4 text-center">Update Student </h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name || ''} // Fallback to empty string
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    type="number"
                                    name="rollno"
                                    placeholder="Roll"
                                    value={formData.rollno || ''} // Fallback
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 mb-3">
                            <label className="form-label">
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="physics"
                                        placeholder="Physics"
                                        value={formData.physics || ''} // Fallback
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="col-4 mb-3">
                            <label className="form-label">
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="chemistry"
                                        placeholder="Chemistry"
                                        value={formData.chemistry || ''} // Fallback
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="col-4 mb-3">
                            <label className="form-label">
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="maths"
                                        placeholder="Maths"
                                        value={formData.maths || ''} // Fallback
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 mb-3">
                            <label className="form-label">
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="english"
                                        placeholder="English"
                                        value={formData.english || ''} // Fallback
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="col-6">
                            <label className="form-label">
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="socialscience"
                                        placeholder="Social Science"
                                        value={formData.socialscience || ''} // Fallback
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="total"
                                        value={formData.total || ''} // Fallback
                                        readOnly // Prevent manual edits
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="col-4">
                            <label className="form-label">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="percentage"
                                        value={formData.percentage || ''} // Fallback
                                        readOnly // Prevent manual edits
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="col-4">
                            <label className="form-label">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="grade"
                                        value={formData.grade || ''} // Fallback
                                        readOnly // Prevent manual edits
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="col-6"></div>
                    </div>

                    <div className="row">
                        <div className='col-6'>
                        <button input type="submit" 
                                className="col btn btn-success btn-block">
                                Update
                            </button>
                        </div>
                        <div className='col-6'>
                        <button input type="reset" className="btn btn-danger btn-block" onClick={handleReset}>
                                Reset
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}