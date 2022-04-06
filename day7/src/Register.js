import React, {Component} from 'react';
import './register.css'


class Register extends Component{
    state={
        title:'',
        firstName:'',
        lastName:'',
        dateofbirth:'',
        email:'',
        password:'',
        confirmPassword:'',
        register:'',
        reset:'',
        submit:false,
    }
      
      handleChange=(e)=>{
      if(e.target.type=='checkbox'){
        this.setState({[e.target.name]:e.target.checked})
      }else{
        this.setState({[e.target.name]:e.target.value})
      }

  }
  handleReset=(e)=>{e.preventDefault();this.setState({title:'',
  firstName:'',
  lastName:'',
  dateofbirth:'',
  email:'',
  password:'',
  confirmPassword:'',
  })

  }
  handleRegister=(e)=>{
  this.setState({submit:true})
  }
  render(){

  return(
    <div>
      <div className='c'>
                <div className='a'>
      <div>Title</div>    
     <div className='move1'>First Name</div>
     <div className='move2'>Last Name</div>
     
     </div>
     <div className='a'>
     
    <select className='move3' name='title' value={this.state.title} onChange={this.handleChange}> 
    <option value='' >Select</option>
     <option value='Mr' >Mr</option>
    <option value='Mrs' >Mrs</option>
    <option value='Ms' >Ms</option>  
     </select>
     {this.state.title}
     <input  className='move4' type='text' name='firstName'onChange={this.handleChange} value={this.state.firstName}/>
     {this.state.firstName}
     <input className='move5' type='text' name='lastName'onChange={this.handleChange} value={this.state.lastName}/>
     {this.state.lastName}
     </div>
     <br/>
     <div className='a'>
      <div>Date of Birth</div>    
     <div className='move6'> Email</div>
     </div>
     <div className='a'>
     <input className='move7'type='date' value={this.state.dateofbirth} onChange={this.handleChange}
     name='dateofbirth'/>  
     {this.state.dateofbirth}
     <input className='move8'type='text' name='email'onChange={this.handleChange} value={this.state.email}/>
     {this.state.email}
     </div>
     <br/>
     <div className='a'>
      <div>Password</div>    
     <div className='move9'> Confirm Password</div>
     </div>
     <div className='a'>
     <input className='move7'type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
      <input className='move8'type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange}/>
      {this.state.password}
      {this.state.confirmPassword}
      </div>
      <br/>
      <div className='a1'>
      <input type='checkbox'/>
      <label>Accept terms & Conditions</label>
      </div>
      <br/>

      <button className='move10'onClick={this.handleRegister}>Register</button>
      <button className='move11' onClick={this.handleReset}>Reset</button>
      
      

      
              
      
      
     
 



        </div>
        

        <div>
        {this.state.submit && (<div className='o'>
        <div>Name :   {this.state.title}{this.state.firstName} {this.state.lastName}</div>
        <div>Date of Birth : {this.state.dateofbirth}</div>
        <div>Email Id :      {this.state.email}</div></div>)}
        </div>
         </div>

          
      )
}
}
export default Register;




