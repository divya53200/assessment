import React, {Component} from 'react';
import './register.css'


class Register extends Component{
  render(){

  return(
    <div className='reg'>
    <h2 className='fr' >Register new account </h2>
    <div className='ab'>
    <div><input type='text' placeholder='First Name'></input></div>
    <div><input type='text' placeholder='Last Name'></input></div></div>
    <div className='n'>
    <input type='text' placeholder=' Name'></input></div>
    <div className='c'>
    <input type='text' placeholder='City'></input></div>
    <div className='pn'>
    <input type='text' placeholder='Phone Number'></input></div>
    <div className='e'>
    <input type='text' placeholder='Email'></input></div>
    <button className='cr'onclick='submit'>Create Account</button>
    </div>

    

    
      )
}
}
export default Register;
