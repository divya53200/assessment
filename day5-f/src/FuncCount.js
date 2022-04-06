import React,{useState} from 'react'
import './count.css'



function FuncCount(){
  const[count,setCount]=useState(0)
  const handleIncrement=()=>{
    setCount(count+1)
  }
  const handleDecrement=()=>{
    setCount(count-1)
  }
    

   
  return(
    <div>
    Count{count}
    <button  className='button1'onClick={handleIncrement}>Increment</button>
    <button className='button2' onClick={handleDecrement} >Decrement</button>

    </div>
      )


  }
  export default FuncCount;
