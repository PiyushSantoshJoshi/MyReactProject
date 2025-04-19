import React from 'react'

function EmployeeList({ index, employee, deleteItem, editfeild }) {

  return (
    <>
    <tr>
        <td>{employee.employeeId}</td>
        <td>{employee.employeeName}</td>
        <td>{employee.basicSalary}</td>
        <td>{employee.hra}</td>
        <td>{employee.da}</td>
        <td>{employee.gross}</td>
        <td>{employee.pf}</td>
        <td>{employee.pt}</td>
        <td>{employee.it}</td>
        <td>{employee.netSalary}</td>
        <td><button className='btn btn-sm btn-danger' onClick={
          ()=>{
            editfeild(index);
            }
          }>edit</button></td>
        <td><button className='btn btn-sm btn-danger' onClick={
          ()=>{
            deleteItem(index);
            }
          }>del</button></td>
    </tr>
    </>
  )
}

export default EmployeeList;
