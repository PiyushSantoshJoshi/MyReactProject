import React from 'react'
import { useState } from 'react'
import ListItem2 from './ListItem2'
import AddStudentform from './AddStudentform'

function DataList2() {
    const [items, setItems] = useState([
        { name: 'Piyush', rollno: 58, physics: 50, chemistry: 60, maths: 70, english: 80, socialscience: 90 },
        { name: 'Yash', rollno: 59, physics: 60, chemistry: 66, maths: 72, english: 60, socialscience: 85 },
        { name: 'Harsh', rollno: 60, physics: 68, chemistry: 69, maths: 73, english: 81, socialscience: 97 },
        { name: 'Shyam', rollno: 61, physics: 50, chemistry: 62, maths: 78, english: 85, socialscience: 99 },
        { name: 'Parth', rollno: 62, physics: 50, chemistry: 60, maths: 70, english: 80, socialscience: 21 },
        { name: 'Omkar', rollno: 63, physics: 54, chemistry: 67, maths: 78, english: 53, socialscience: 49 },
        { name: 'Shivam', rollno: 64, physics: 55, chemistry: 61, maths: 78, english: 89, socialscience: 90 },
        { name: 'Atharva', rollno: 65, physics: 53, chemistry: 63, maths: 72, english: 86, socialscience: 90 },
        { name: 'Rushikesh', rollno: 66, physics: 54, chemistry: 62, maths: 74, english: 82, socialscience: 77 }
    ]);


    const deleteItem = (indexToDelete) => {
        console.log("from datalist " + indexToDelete);
        setItems(items.filter((_, index) => index !== indexToDelete));
    }

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <>
            <button type="button" class="btn btn-success btn-sm" onClick={() => {
                console.log("hello");
                addItem({ 'rollno': 21, 'name': 'Omshree', 'physics': 54, 'chemistry': 62, 'maths': 74, 'english': 82, 'socialscience': 77 });
            }}>add</button>

            <div className="container">
                <div className='row'>
                    <div className='col-md-12 col-lg-6'>
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
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((student, index) => (
                                    <ListItem2 key={index} index={index} student={student} deleteItem={deleteItem} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='p-4 col-md-12 col-lg-6'>
                        <AddStudentform addItem={addItem} />
                    </div>
                </div>
            </div>

        </>
    );

}

export default DataList2;