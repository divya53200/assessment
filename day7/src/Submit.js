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

        
    }
    handleSubmit=()=>{
        this.setState({submit:true})
    }
    handleChange=(e)=>{
        if(e.target.type=='checkbox'){
          this.setState({[e.target.name]:e.target.checked})
        }else{
          this.setState({[e.target.name]:e.target.value})
        }
    }

    
  render(){

  return(
    <div>
        <div className='w'>
        <label>Name of Passenger</label>
        <input type='text' name='name'onChange={this.handleChange} 
        value={this.state.name} />
        <br/>
        <label>Age</label>
        <input type='number' name='age'onChange={this.handleChange}
        value={this.state.age}/>
        <br/>
        <label>Gender</label>
        <input type='radio' name='gender' value='M'
        onChange={this.handleChange}/>
        <label>male</label>
        <input type='radio' name='gender' value='F'
        onChange={this.handleChange}/>
        <label>female</label>
        <br/>
        <label>Source</label>
        <select name='source' value={this.state.source} onChange={this.handleChange}> 
        <option></option>
        <option>Chennai</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>  
        </select>
        <br/>
        <label>Destination</label>
        <select name='destination' value={this.state.destination} onChange={this.handleChange}> 
        <option></option>
        <option>Delhi</option>
        <option>Kolkata</option>
        <option>Simla</option>
        </select>
        <br/>
        <input type='checkbox' />     I Agree all terms and Conditions
        <br/>
        <button className='s'onClick={this.handleSubmit}>Submit</button>
        {this.state.submit && (
      <div>
        <div>Name of Passenger :  {this.state.name} </div>
        <div>Age is : {this.state.age}</div>
        <div>Gender : {this.state.gender} </div>
        <div>Travelling from{this.state.source} to {this.state.destination}</div>
        </div>)}
      
      
      
        
        



        </div>
 
   
    </div>
      )
}
}
export default Submit;

