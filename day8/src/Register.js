import React, {Component} from 'react';



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
    handleSubmit=()=>{
      if(!this.state.title)
      alert("title is mandatory")
      if(!this.state.firstName)
      alert("firstName is mandatory")
      if(!this.state.lastName)
      alert("lastName is mandatory")
      if(!this.state.dateofbirth)
      alert("date of birth is mandatory")
      if(!this.state.email)
      alert("email is mandatory")
      if(!this.state.password)
      alert("password is mandatory")
      if(!this.state.confirmPassword)
      alert("confirmpassword is mandatory")
      
      if(this.state.password==this.state.confirmPassword)
      this.setState({submit:true})
      else{
        alert('password should match')}
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

  render(){

  return(
    <div>
      <div className='w-50 m-10 p-4 rounded border border-2 border-dark justify-content-center'>
              {!this.state.submit && (
        <div>
                <div className='row'>
      <div className='col-2'>Title</div>    
     <label className='col-5'>First Name</label>
     <label className='col-5'>Last Name</label>
     
     </div>
     <div className=''>
     
    <select className='col-2 p-1' name='title' value={this.state.title} onChange={this.handleChange}> 
    <option value='' >Select</option>
     <option value='Mr' >Mr</option>
    <option value='Mrs' >Mrs</option>
    <option value='Ms' >Ms</option>  
     </select>
     {this.state.title}
     <input  className='col-5' type='text' name='firstName'onChange={this.handleChange} value={this.state.firstName}/>
     {this.state.firstName}
     <input className='col-5' type='text' name='lastName'onChange={this.handleChange} value={this.state.lastName}/>
     {this.state.lastName}
     </div>
     <br/>
     <div className='row'>
      <div className='col-5'>Date of Birth</div>    
     <div className='col-1 me-1'> Email</div>
     </div>
     <div className='row'>
     <input className='col-3'type='date' value={this.state.dateofbirth} onChange={this.handleChange}
     name='dateofbirth'/>  
     {this.state.dateofbirth}
     <input className='col-5'type='text' name='email'onChange={this.handleChange} value={this.state.email}/>
     {this.state.email}
     </div>
     <br/>
     <div className='row'>
      <div className='col-2'>Password</div>    
     <div className='col-5'> Confirm Password</div>
     </div>
     <div className='row'>
     <input className='col-2'type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
      <input className='col-5'type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange}/>
      {this.state.password}
      {this.state.confirmPassword}
      </div>
      <br/>
      <div className='a1'>
      <input type='checkbox'/>
      <label>Accept terms & Conditions</label>
      </div>
      <br/>

      <button className='col-2 btn btn-primary'onClick={this.handleSubmit}>Register</button>
      <button className='col-2 btn btn-secondary' onClick={this.handleReset}>Reset</button>
      </div>)}
      

      {this.state.submit && (<div>
        <div>Name    {this.state.title}{this.state.firstName} {this.state.lastName}</div>
        <div>Born on    {this.state.dateofbirth}</div>
        <div>your email is      {this.state.email}</div></div>)}
              
      
      
     
 



        </div>

              
          </div>
      )
}
}
export default Register;
