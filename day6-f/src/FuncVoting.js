import React, { useState } from 'react'
import './App.css'

function FuncVoting(props){
    const[count,setCount]=useState(0)
    const handleVote=()=>{
        setCount(count+1)
    }
    return (
        <div>
            <div className='w'>
            <div>{props.title }   </div>
            <div>{count}</div>
            <div><button onClick={handleVote}>vote</button>
            </div>
            </div>
            
      </div>
    )
  }


export default FuncVoting
