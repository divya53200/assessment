import React,{useState} from 'react'
import Data from './Data.js'
import './data.css'


function App(){

  const [count,setCount]=useState(0);
  const [text,setText]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault()

    let amount = parseInt(count);

    if (count<=0){
      amount=1;
    }
    if (count>8){
      amount=8;
    }
    setText(Data.slice(0,amount))
  }
 
  return(
    <div>
    
    <h3 className='text-center mt-5 tired font-weight-bold '>TIRED OF BORING LOREM IPSUM?</h3>
    
    <div className='d-flex justify-content-center'>
    
    <div className='fs-5' >Paragraphs:</div>
  
    <input className='ms-3' type='number' name='amount' id='amount' value={count} onChange={(e)=>setCount(e.target.value)}/>
    
   
    <button  className='btn btn-primary ms-3'onClick={handleSubmit}>Generate</button>  
    </div> 
   
    
    <div className=' col-5 container pt-5  text-secondary'>
      {
        text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })
      }
    </div>
    </div>

    
   
  )
}
export default App