import React from 'react'
import './FormBar.css'
function FormBar(props){
    

    const fun =()=>{
    var isGetStudents=!props.isGetStudents;
    console.log(isGetStudents)
       props.setGetStudents(isGetStudents => !isGetStudents)
    }
    
    return (
        <div className='form-bar'>
            <button
            onClick={fun}
            >
            Get Students Details 
            </button>
            <button>
            Register new Student
            </button>
        </div>
    );
}

export default FormBar;