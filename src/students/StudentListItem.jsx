import React from 'react'

function StudentListItem({ index, student, deleteItem, editfeild }) {


  return (
    <>
      <tr>
        <td>{student.name}</td>
        <td>{student.rollno}</td>
        <td>{student.physics}</td>
        <td>{student.chemistry}</td>
        <td>{student.maths}</td>
        <td>{student.english}</td>
        <td>{student.socialscience}</td>
        <td>{student.total}</td>
        <td>{student.percentage}</td>
        <td>{student.grade}</td>
        <td><button className='btn btn-sm btn-danger' onClick={
          () => {
            editfeild(index);
          }
        }>edit</button></td>
        <td><button className='btn btn-sm btn-danger' onClick={
          () => {
            deleteItem(index);
          }
        }>del</button></td>
      </tr>
    </>

  );
}

export default StudentListItem;