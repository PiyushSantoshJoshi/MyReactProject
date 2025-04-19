import React from 'react'

function ListItem2({ index, student, deleteItem }) {
  const totalmarks= student.physics + student.chemistry + student.maths + student.english + student.socialscience;

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
        <td>{totalmarks}</td>
        <td><button className='btn btn-sm btn-danger' onClick={
          () => {
            deleteItem(index);
          }
        }>del</button></td>
      </tr>
    </>

  );
}

export default ListItem2;