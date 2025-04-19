import React from 'react'
import { useState } from 'react'
import EmployeeList from './EmployeeList';

export default function EmployeeData() {
    const [items,setitems]=useState([
        {employeeId:1109,employeeName:'Yash',basicSalary:50000,hra:6000,da:7000,gross:63000,pf:1000,pt:1500,it:1000,netSalary:59500},
        {employeeId:2107,employeeName:'Piyush',basicSalary:50000,hra:6000,da:7000,gross:63000,pf:1000,pt:1500,it:1000,netSalary:59500},
        {employeeId:3290,employeeName:'Harsh',basicSalary:50000,hra:6000,da:7000,gross:63000,pf:1000,pt:1500,it:1000,netSalary:59500}
    ]);
    // const [selectedEmployeeIndex,setSelectedEmployeeIndex]=useState(1);
    // const [isUpdating,setUpdatingEmployee]=useState(false);
    // const [selectedEmployee,setSelectedEmployee]=useState({
    //     employeeId:'',
    //     employeeName:'',
    //     basicSalary:'',
    //     hra:'',
    //     da:'',
    //     gross:'',
    //     pf:'',
    //     pt:'',
    //     it:'',
    //     netSalary:''
    // });

    const addItem =(item) =>{
        setitems([...items,item]);
    };



    const deleteItem = (indexToDelete)=>{
        console.log("from datalist "+indexToDelete);
        setitems(items.filter((_,index)=>index!==indexToDelete));
    }

    // const updateItem=(item)=>{
    //     console.log('Form Data on Submit:',item);
    //     const updatedItems=[...items];
    //     updatedItems[selectedEmployeeIndex]=item;
    //     setitems(updatedItems);
    //     setUpdatingEmployee(false);
    // };

    const editfeild=(index)=>{
        setSelectedEmployeeIndex(index);
        console.log(index);
        setSelectedEmployee(items[index]);
        // setUpdatingEmployee(true);
    };

  return (
    <>
    <div className='container'>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Basic Salary</th>
                    <th>HRA</th>
                    <th>DA</th>
                    <th>Gross</th>
                    <th>PF</th>
                    <th>PT</th>
                    <th>IT</th>
                    <th>Net Salary</th>
                </tr>
            </thead>
            <tbody>
                {items.map((employee,index)=>(
                    <EmployeeList key={index} index={index} employee={employee} deleteItem={deleteItem} editfeild={editfeild}/>
                ))}
            </tbody>
            <AddEmployee addItem={addItem}/>
            <UpdateEmployee/>
        </table>
    </div>
    </>
  )
}
