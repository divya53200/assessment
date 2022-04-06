import React, {useState} from 'react';



function FuncRegister(){
    const [title,setTitle]=useState('')
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [dateofbirth,setDateofbirth]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState()
    const [confirmpassword,setConfirmpassword]=useState()
    const[onsubmitted,setOnsubmitted]=useState(false)


    const handleRegister=()=>{
      if(!title)
      alert("title is mandatory")
      if(!firstname)
      alert("firstName is mandatory")
      if(!lastname)
      alert("lastName is mandatory")
      if(!dateofbirth)
      alert("date of birth is mandatory")
      if(!email)
      alert("email is mandatory")
      if(!password)
      alert("password is mandatory")
      if(!confirmpassword)
      alert("confirmpassword is mandatory")
      
      if(password===confirmpassword)
      setOnsubmitted({onsubmitted:true})
      else{
        alert('password should match')}
      }
     const  handleReset=(e)=>{e.preventDefault();setTitle('') ; setFirstname(''); setLastname(''); setDateofbirth('');
     setEmail('');setPassword('');setConfirmpassword('');}
   
       

  return(
    <div>
      <div>
      
              {!onsubmitted && (
        <div>
          <div className='w-50 m-10 p-4 rounded border border-3 border-dark justify-content-center'>
                <div className='row'>
      <div className='col-2'>Title</div>    
     <label className='col-5'>First Name</label>
     <label className='col-5'>Last Name</label>
     
     </div>
     <div className=''>
     
    <select className='col-2 p-1' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}> 
    <option value='' >Select</option>
     <option value='Mr' >Mr</option>
    <option value='Mrs' >Mrs</option>
    <option value='Ms' >Ms</option>  
     </select>
     <input  className='col-5' type='text' name='firstName'onChange={(e)=>setFirstname(e.target.value)} value={firstname}/>
     <input className='col-5' type='text' name='lastName'onChange={(e)=>setLastname(e.target.value)} value={lastname}/>
     </div>
     <br/>
     <div className='row'>
      <div className='col-5'>Date of Birth</div>    
     <div className='col-1 me-1'> Email</div>
     </div>
     <div className='row'>
     <input className='col-3'type='date' value={dateofbirth} onChange={(e)=>setDateofbirth(e.target.value)}
     name='dateofbirth'/>  
     <input className='col-5'type='text' name='email'onChange={(e)=>setEmail(e.target.value)} value={email}/>
     </div>
     <br/>
     <div className='row'>
      <div className='col-2'>Password</div>    
     <div className='col-5'> Confirm Password</div>
     </div>
     <div className='row'>
     <input className='col-2'type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <input className='col-5'type='password' name='confirmPassword' value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/>
      {password}
      {confirmpassword}
      </div>
      <br/>
      <div className='a1'>
      <input type='checkbox' />
      <label>Accept terms & Conditions</label>
      </div>
      <br/>

      <button className='col-2 btn btn-primary'onClick={(e)=>handleRegister(e)}>Register</button>
      <button className='col-2 btn btn-secondary' onClick={(e)=>handleReset(e)}>Reset</button>
      </div>
      </div>)}
      </div>
      

      
        
      <div >
      {onsubmitted && (<div className='border border-3 border-dark col-5 mt-10 h-50 text-violet bg-warning p-2' >
        <div>Name :   {title} {firstname} {lastname}</div>
        <div>Date of birth:   {dateofbirth}</div>
        <div>Email Id:    {email}</div></div>)}
        </div>
             
      
      
     
 




              
          </div>
      )
}

export default FuncRegister;
