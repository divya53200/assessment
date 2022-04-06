import React,{useState} from 'react'
function FuncInput(){
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const[age,setAge]=useState('')
    const[submit,setSubmit]=useState(false)
    const [showage,setShowage]=useState(false)

   
    
    const handleSubmit=()=>{
        setSubmit({submit:true})
    }
     const  handleReset=(e)=>{e.preventDefault();setFirstname('');setLastname('');setAge('');}
     const  handleShowage=(e)=>{setShowage(!showage)}
  

    return(
      <div>
        
          {!submit && (
              <div>
      <label>FirstName</label>
    <input type='text' name='firstName'onChange={(e)=>setFirstname(e.target.value)} 
    value={firstname}/><br/><br/>
    <label>LastName</label>
    <input type='text' name='lastName'onChange={(e)=>setLastname(e.target.value)} 
    value={lastname}/>
       <br/><br/>
       <label>Age</label>
       <input type='number' name='age'onChange={(e)=>setAge(e.target.value)}
       value={age}/>
       <br/><br/>
      <button className='btn btn-outline-primary' onClick={handleSubmit}>Submit</button>
      <button className='btn btn-outline-secondary' onClick={handleReset}>RESET</button>
      </div>)}
      


              {submit&&
              <div class=' w-25 m-5 p-2 border border-3 border-dark'>
                
               <label> NAME:{firstname}  {lastname}</label>

               <br/>
               {showage&&(
                 <label>AGE:{age} </label>)}<br/>    
               <button type='submit'className='btn btn-secondary' onClick={handleShowage}>{showage?'Hide Age':'Show Age'}</button>
                    </div>
}
                

    
       
       
        </div>
    )
  }

export default FuncInput;


