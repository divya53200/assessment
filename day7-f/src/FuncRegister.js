import React,{useState} from 'react'
import './register.css'


function FuncRegister(){

  const [title,setTitle]=useState('')
   const [firstname,setFirstname]=useState('')
   const [lastname,setLastname]=useState('')
   const [dateofbirth,setDateofbirth]=useState('')
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState()
   const [confirmpassword,setConfirmpassword]=useState()
   const[onsubmitted,setOnsubmitted]=useState(false)

    const handleRegister=(e)=>{e.preventDefault();
    setOnsubmitted(true)}
   
    const handleReset=(e)=>{e.preventDefault(); setTitle('') ; setFirstname(''); setLastname(''); setDateofbirth('');
     setEmail('');setPassword('');setConfirmpassword('')}
   
    
    return (
      <div>
      <div className='c'>
        <div className='a'>
      <div>Title</div>

      <div className='move1'>First Name</div>
     <div className='move2'>Last Name</div>
     </div>
     <div className='a'>
     <select className='move3' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}> 
     <option value='' >Select</option>
      <option value='Mr' >Mr</option>
     <option value='Mrs' >Mrs</option>
     <option value='Ms' >Ms</option>  
      </select>
      <input  className='move4' type='text' name='firstName'onChange={(e)=>setFirstname(e.target.value)} value={firstname}/>
     <input className='move5' type='text' name='lastName'onChange={(e)=>setLastname(e.target.value)} value={lastname}/>
     </div>
    
       <div className='a'>
       <label>Date of Birth</label>
       <label className='move6'>Email</label>
       </div>
       <div className='a'>
       <input className='move7'type='date' value={dateofbirth} onChange={(e)=>setDateofbirth(e.target.value)}
       name='dateofbirth'/> 
        <input className='move8'type='text' name='email'onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </div>
       <div className='a'>
      <label>Password</label>
      <div className='move9'> Confirm Password</div>
      </div>
      <div className='a'>
      <input className='move7'type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        
       
        <input className='move8'type='password' name='confirmPassword' value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/> 
        </div>

        
        <div className='a1'>
      <input type='checkbox'/>
      <label>Accept terms & Conditions</label>
      </div>
        <div>
        <button className='move10' onClick={(e)=>handleRegister(e)}>Register</button>

    
      <button className='move11' onClick={(e)=>handleReset(e)}>Reset</button>
      </div>
      </div>
      <div >
      {onsubmitted && <div className='o'>
        <div>Name :   {title}{firstname} {lastname}</div>
        <div>Date of Birth:   {dateofbirth}</div>
        <div>Email Id:      {email}</div></div>}  
        </div>
      
      </div>
      
    )
  
}

export default FuncRegister;