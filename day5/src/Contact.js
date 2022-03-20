import React, {Component} from 'react';
import './Contact.css'


class Contact extends Component{
  render(){

  return(
    <div>
      <div className='card'>
      <h2>Contact Us</h2>
      <div className='fl'>
      <label className='a'>First Name</label>
      <label className='b'>Last Name</label>
      </div>
      <div className='tt'>
      <input className='a1'type='text'/>
      <input className='b1'type='text'/>
      </div>
      <br/>
      <div className='eb'>
      <label className='a2'>E-mail</label>
      <label className='b2'>Business Phone</label>
      </div>
      <div className='tt1'>
      <input className='a3'type='text'/>
      <input className='b3'type='text'/>
      </div>
      <br/>
      <div className='cj'>
      <label className='a4'>Company Name</label>
      <label className='b4'>Job Title</label>
      </div>
      <div className='tt2'>
      <input className='a5'type='text'/>
      <input className='b5'type='text'/>
      </div>
      <br/>
      <div className='r'>   Street 1</div>
      <input className='s' type='text'/>
      <br/>
      <br/>
      <div className='cs'>
      <label className='a6'>City</label>
      <label className='b6'>State/Province</label>
      </div>
      <div className='tt3'>
      <input className='a7'type='text'/>
      <input className='b7'type='text'/>
      </div>
      <br/>
      <div className='zc'>
      <label className='a8'>ZIP/Postal Code</label>
      <label className='b8'>Country/Region</label>
      </div>
      <div className='tt4'>
      <input className='a9'type='text'/>
      <input className='b9'type='text'/>
      </div>
      <br/>
      <div className='o'>Topic</div>
      <input className='t' type='text'/>
      </div>
      <br/>
      <br/>

      




      
      
    </div>


    
      )
}
}
export default Contact;
