import React, {useState} from 'react';
import './submit.css'


function FuncSubmit(){
  const[name,setName]=useState('')
  const[age,setAge]=useState('')
  const[gender,setGender]=useState('')
  const[source,setSource]=useState('')
  const[destination,setDestination]=useState('')
  const[submit,setSubmit]=useState(false)
  const[ischecked,setIschecked]=useState(false)

  const handleSubmit=()=>{
        setSubmit({submit:true})
    }
  

  return(
    <div>
        <div className='w'>
        <label>Name of Passenger</label>
        <input  className='move1'type='text' name='name'onChange={(e)=>setName(e.target.value)} 
        value={name} />
        <br/>
        <br/>
        <label>Age</label>
        <input className='move2' type='number' name='age'onChange={(e)=>setAge(e.target.value)}
        value={age}/>
        <br/>
        <br/>
        <label>Gender</label>
        <input className='move3'type='radio' name='gender' value='M'
        onChange={(e)=>setGender(e.target.value)}/>
        <label>male</label>
        <input className='move4'type='radio' name='gender' value='F'
        onChange={(e)=>setGender(e.target.value)}/>
        <label>female</label>
        <br/>
        <br/>
        <label>Source</label>
        <select className='move5' name='source' value={source} onChange={(e)=>setSource(e.target.value)}> 
        <option></option>
        <option>Chennai</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>  
        </select>
        <br/>
        <br/>
        <label>Destination</label>
        <select className='move6'name='destination' value={destination} onChange={(e)=>setDestination(e.target.value)}> 
        <option></option>
        <option>Delhi</option>
        <option>Kolkata</option>
        <option>Simla</option>
        </select>
        <br/>
        <br/>
        <input type='checkbox' value='ischecked' onChange={(e)=>setIschecked(e.target.value)}/>     I Agree all terms and Conditions
        <br/>
        <button className='s'onClick={handleSubmit}>Submit</button>
       </div>
       
       {submit && (
      <div className='o'>
        <div>Name of Passenger :  {name} </div>
        <div>Age is : {age}</div>
        <div>Gender : {gender} </div>
        <div>Travelling from{source} to {destination}</div>
        <div>{ischecked?'yes':'no'}Agree all terms and Conditions </div>
        </div>)}
        
   
    </div>
      )
}

export default FuncSubmit;

