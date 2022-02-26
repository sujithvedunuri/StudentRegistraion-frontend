import React, { useEffect } from 'react'
import './StudentsList.css'
import axios from "axios"

const StudentsList = () =>{

const listOfStudents = [
    {
        name:'sujith',
        age: 21
    },
    {
        name:'supriya',
        age: 25
    },
]
function meth(value){
    console.log(value)
    return (
        <div className='list-box'>
            <span>{value.name}</span><span>{value.age}</span>
        </div>
    );
}


useEffect(() => {
     fetch("/").then(
        response => {
           console.log(response)
        }
    )

}, []);

return (
    <>
    <div className='get-students-list'>
        <div className='students-list'>
        Students list
        {listOfStudents.map(meth)}
        </div>
    </div>
    </>
);
}

export default StudentsList;