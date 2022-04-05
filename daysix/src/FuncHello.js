import React, { useState } from 'react'

function FuncHello(){
    const[name,setName]=useState('welcome')
  const handleChange=()=>{
    setName('hello world!')
}
  
    return (
      <div>{name}
       <button onClick={handleChange}>Change</button>
       </div>
    )
  }


export default FuncHello;

