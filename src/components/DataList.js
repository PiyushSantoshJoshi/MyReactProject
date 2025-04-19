import React from "react";
import ListItem from "./ListItem";

function DataList() {
  const students = [
    { name: 'Piyush', age: 21, city: 'Pune' },
    { name: 'Yash', age: 20, city: 'Nashik' },
    { name: 'Harsh', age: 20, city: 'Baramati' }
  ];

  const delFun = (index) => {
    document.getElementById("myTable").deleteRow(index);
    
  }

  return (

    <>
      <table  className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody id="myTable">
          {students.map((item, index) => (
            <ListItem key={index} index={index} student={item} delFun={delFun} />
          ))}
        </tbody>
      </table>

    </>

  );
}

export default DataList;