import React, {useState} from 'react';


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
        <div className='w-50 m-10 p-4 rounded border border-2 border-dark justify-content-center mt-4'>
        <label className='col-4'>Name of Passenger</label>
        <input className='col-4' type='text' name='name'onChange={(e)=>setName(e.target.value)} 
        value={name} />
        <br/>
        <br/>
        <label className='col-4'>Age</label>
        <input className='col-4' type='number' name='age'onChange={(e)=>setAge(e.target.value)}
        value={age}/>
        <br/>
        <br/>
        <label className='col-4'>Gender</label>
        <input className='col-1' type='radio' name='gender' value='M'
        onChange={(e)=>setGender(e.target.value)}/>
        <label>male</label>
        <input className='col-1'type='radio' name='gender' value='F'
        onChange={(e)=>setGender(e.target.value)}/>
        <label>female</label>
        <br/>
        <br/>
        <label className='col-4'>Source</label>
        <select className='col-4'name='source' value={source} onChange={(e)=>setSource(e.target.value)}> 
        <option></option>
        <option>Chennai</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>  
        </select>
        <br/>
        <br/>
        <label className='col-4'>Destination</label>
        <select className='col-4'name='destination' value={destination} onChange={(e)=>setDestination(e.target.value)}> 
        <option></option>
        <option>Delhi</option>
        <option>Kolkata</option>
        <option>Simla</option>
        </select>
        <br/>
        <br/>
        <input type='checkbox' name='ischecked' onChange={(e)=>setIschecked(e.target.value)} value={ischecked}/>     I Agree all terms and Conditions
        <br/>
        <br/>
        <button className='btn btn-primary text-white'onClick={handleSubmit}>Submit</button>
        </div>
        <br/>
        <br/>

        {submit && (
      <div className='border border-3 border-dark col-5 mt-10 h-50 text-violet bg-warning p-2'>
        <div>Name of Passenger :  {name} </div>
        <div>Age is : {age}</div>
        <div>Gender : {gender} </div>
        <div>Travelling from{source} to {destination}</div>
        <div>{ischecked?"yes":"no"}Agree all terms and Conditions</div>
       
        </div>)}
      
      
      
 
   
    </div>
      )
}

export default FuncSubmit;



