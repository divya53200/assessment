import React,{useState} from 'react';
import './student.css'

function FuncStudent(){
    const[name,setName]=useState('Divya')
    const[age,setAge]=useState(23)
    return(
       <div>
       <h1> My name is : <u><span className = 'student'> {name}</span></u>
         and My age is: <u><span className='student1'>{age}</span></u></h1>
       </div>
    )
    }

export default FuncStudent;