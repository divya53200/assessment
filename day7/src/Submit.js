import React, {Component} from 'react';
import './submit.css'


class Submit extends Component{
    state={
        name:'',
        age:'',
        gender:'',
        source:'',
        destination:'',
        submit:false,
        isChecked:false,
          
      }
        
    
    
    handleSubmit=()=>{
        this.setState({submit:true})
    }
    handleChange=(e)=>{
          this.setState({[e.target.name]:e.target.value})
        
    }

    
  render(){

  return(
    <div>
        <div className='w'>
        <label>Name of Passenger</label>
        <input  className='move1'type='text' name='name'onChange={this.handleChange} 
        value={this.state.name} />
        <br/>
        <br/>
        <label>Age</label>
        <input className='move2' type='number' name='age'onChange={this.handleChange}
        value={this.state.age}/>
        <br/>
        <br/>
        <label>Gender</label>
        <input className='move3'type='radio' name='gender' value='M'
        onChange={this.handleChange}/>
        <label>male</label>
        <input className='move4'type='radio' name='gender' value='F'
        onChange={this.handleChange}/>
        <label>female</label>
        <br/>
        <br/>
        <label>Source</label>
        <select className='move5' name='source' value={this.state.source} onChange={this.handleChange}> 
        <option></option>
        <option>Chennai</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>  
        </select>
        <br/>
        <br/>
        <label>Destination</label>
        <select className='move6'name='destination' value={this.state.destination} onChange={this.handleChange}> 
        <option></option>
        <option>Delhi</option>
        <option>Kolkata</option>
        <option>Simla</option>
        </select>
        <br/>
        <br/>
        <input type='checkbox'  name='isChecked' onChange={this.handleChange} value={this.state.isChecked} />     I Agree all terms and Conditions
        <br/>
        <button className='s'onClick={this.handleSubmit}>Submit</button>
       </div>
       <div className='o'>
       {this.state.submit && (
      <div>
        <div>Name of Passenger :  {this.state.name} </div>
        <div>Age is : {this.state.age}</div>
        <div>Gender : {this.state.gender} </div>
        <div>Travelling from{this.state.source} to {this.state.destination}</div>
        <div>{this.state.isChecked?"yes":"no"}Agree all terms and Conditions</div>
        <div>
         </div>
        </div>)}
        </div>
   
    </div>
      )
}
}
export default Submit;

