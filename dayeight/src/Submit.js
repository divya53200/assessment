import React, {Component} from 'react';


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
        <div className='w-50 m-10 p-4 rounded border border-2 border-dark justify-content-center mt-4'>
        <label className='col-4'>Name of Passenger</label>
        <input className='col-4' type='text' name='name'onChange={this.handleChange} 
        value={this.state.name} />
        <br/>
        <br/>
        <label className='col-4'>Age</label>
        <input className='col-4' type='number' name='age'onChange={this.handleChange}
        value={this.state.age}/>
        <br/>
        <br/>
        <label className='col-4'>Gender</label>
        <input className='col-1' type='radio' name='gender' value='M'
        onChange={this.handleChange}/>
        <label>male</label>
        <input className='col-1'type='radio' name='gender' value='F'
        onChange={this.handleChange}/>
        <label>female</label>
        <br/>
        <br/>
        <label className='col-4'>Source</label>
        <select className='col-4'name='source' value={this.state.source} onChange={this.handleChange}> 
        <option></option>
        <option>Chennai</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>  
        </select>
        <br/>
        <br/>
        <label className='col-4'>Destination</label>
        <select className='col-4'name='destination' value={this.state.destination} onChange={this.handleChange}> 
        <option></option>
        <option>Delhi</option>
        <option>Kolkata</option>
        <option>Simla</option>
        </select>
        <br/>
        <br/>
        <input type='checkbox' />     I Agree all terms and Conditions
        <br/>
        <br/>
        <button className='btn btn-primary text-white'onClick={this.handleSubmit}>Submit</button>
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



