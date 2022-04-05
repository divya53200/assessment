import React, {useState} from 'react';
import './accchild.css'




function FuncAccchild(props){
    const[detailinfo,setDetailinfo]=useState(false)
    const handleToggle=(e)=>{
        setDetailinfo(!detailinfo)
    }
 

  return(
    <div>
        <div className='box1'>
    <h4 >{props.title}</h4>
   <p> <button className='rounded-circle ' onClick={handleToggle}>{detailinfo?'-':'+'}</button></p>
    {detailinfo&&<div>{props.info}</div>}
    </div>
    </div>
    
      )
      

}

export default FuncAccchild;
