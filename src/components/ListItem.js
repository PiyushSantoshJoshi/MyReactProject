import React from 'react';

function ListItem({ index, student, delFun }) {


    const onClickfunc = () => {
        console.log("delete from child");
        delFun(index);
    }

    return (<>
        <tr onClick={onClickfunc}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.city}</td>
        </tr>
    </>
    );
}

export default ListItem;