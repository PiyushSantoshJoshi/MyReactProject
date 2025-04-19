import React, { useState } from 'react';

const StudentList = () => {
    const [student] = useState([
        { name: 'Yash', rollno: 58, physics: 50, chemistry: 60, total: 350, percentage: 70, grade: 'B' },
        { name: 'Piyush', rollno: 59, physics: 50, chemistry: 60, total: 350, percentage: 80, grade: 'B+' },
        { name: 'Harsh', rollno: 60, physics: 50, chemistry: 60, total: 350, percentage: 79, grade: 'A' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchBy,setBySearch]=useState('Name');

    

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredStudents = student.filter(student => {
        if (searchBy === 'Name') {
            return student.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchBy === 'Roll') {
            return student.rollno.toString().includes(searchTerm);
        } else if (searchBy === 'Grade') {
            return student.grade.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return true; // Default case, show all students
    });

    return (
        <div className="container">
            <h1>Student List</h1>
            <div className='row'>
            <div className='col-8'>
            <input
                className="form-control mb-3"
                type="text"
                placeholder={`Search by ${searchBy}`}
                value={searchTerm}
                onChange={handleChange}
            />
            </div>
            <div className='px-2 col-4'>
            <div className=" dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                    Select Search Type
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={() =>setBySearch('Name')}>By Name</a></li>
                    <li><a className="dropdown-item" onClick={() => setBySearch('Roll')}>By Roll.no.</a></li>
                    <li><a className="dropdown-item" onClick={() =>setBySearch('Grade')}>By Grade</a></li>
                </ul>
            </div>
            </div>
            </div>


            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Physics</th>
                        <th>Chemistry</th>
                        <th>Total Marks</th>
                        <th>Percentage</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student, index) => (
                        <tr key={index}> 
                            <th>{student.name}</th>
                            <th>{student.rollno} </th>
                            <th>{student.physics}</th>
                            <th>{student.chemistry}</th>
                            <th>{student.total}</th>
                            <th>{student.percentage} </th>
                            <th>{student.grade}</th>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default StudentList;