import React, {Component} from 'react';
import './welcome.css'


class Welcome extends Component{
  handleChange = (e) => {
    if (e.target.type == 'checkbox') {
      this.setState({[e.target.name]:e.target.checked})
    } else {
      
      this.setState({[e.target.name]:e.target.value})
    }
  }
  render(){

  return(
    <div>
    <div className='wel'>
        <div className='a'>
            <h2><center>WELCOME!</center></h2>
        </div>
        <div className='a1'>
            <div className='move1'>ALREADY REGISTERED?</div>
            <div className='move2'>NEW CUSTOMER?</div>
            </div>
            <br/>
            <div className='a2'>
            <div> <input className='move3'text placeholder='Email address'></input></div>
            <div>< input className='move4'text placeholder='Email address'></input></div>
            </div>
            <br/>
            <div className='a3'>
            <div> <input className='move5'text placeholder='Password'></input></div>
            <div>< input className='move6'text placeholder='Password'></input></div>
            </div>
            <div className='f'>
              <div>Forgot password</div>

            </div>
            <br/>
            <div className='a4'>
            <div>< input className='move7'text placeholder='SIGN IN'></input></div>
            <div>< input className='move8'text placeholder='CREATE ACCOUNT'></input></div>
            </div>
            <div className='a5'>
            <input className='r'type='radio' 
            onChange={this.handleChange}  />
            <div className='m' >Remember</div>
            </div>
            <div className='vl'></div>

          








    </div>
    

    </div>
      )
}
}
export default Welcome;
