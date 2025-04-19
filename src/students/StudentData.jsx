import React from 'react'
import { useState } from 'react'
import StudentListItem from './StudentListItem'
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';

function StudentData() {
    const [items, setItems] = useState([
        { name: 'Yash', rollno: 58, physics: 50, chemistry: 60, maths: 70, english: 80, socialscience: 90, total: 350, percentage: 70, grade: 'B' },
        { name: 'Piyush', rollno: 58, physics: 50, chemistry: 60, maths: 70, english: 80, socialscience: 90, total: 350, percentage: 70, grade: 'B' },
        { name: 'Harsh', rollno: 58, physics: 50, chemistry: 60, maths: 70, english: 80, socialscience: 90, total: 350, percentage: 70, grade: 'B' },
    ]);

    const [selectedStudentIndex, setSelectedStudentIndex] = useState(1);//index
    const [isUpdating, setUpdatingStudent] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState({//student
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


    const deleteItem = (indexToDelete) => {
        console.log("from datalist " + indexToDelete);
        setItems(items.filter((_, index) => index !== indexToDelete));
    }

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const updateItem = (item) => {
       console.log('Form Data on Submit:', item); // Debugging
       const updatedItems = [...items]; //All items are transferred from items to updatedItems 
       updatedItems[selectedStudentIndex] = item;
       setItems(updatedItems);
       setUpdatingStudent(false);
       
    };

    const editfeild = (index) => {
        setSelectedStudentIndex(index);
        console.log(index);
        setSelectedStudent(items[index]);
        setUpdatingStudent(true);
    };

    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Roll No</th>
                                    <th>Physics</th>
                                    <th>Chemistry</th>
                                    <th>Maths</th>
                                    <th>English</th>
                                    <th>Social Science</th>
                                    <th>Total Marks</th>
                                    <th>Percentage</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((student, index) => (
                                    <StudentListItem key={index} index={index} student={student} deleteItem={deleteItem} editfeild={editfeild}/>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            {isUpdating && <UpdateStudent selectedStudent={selectedStudent} updateStudent={updateItem}/>}
            {!isUpdating && <AddStudent addItem={addItem} />}

        </>
    );

}

export default StudentData;