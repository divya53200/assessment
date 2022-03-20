import React,{Component} from 'react'




class Input extends Component{
    state={
        firstName:'',
        lastName:'',
        age:'',
        submit:false,
        reset:'',
        showage:false,
        hideage:'',
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
          {!this.state.submit && (
              <div>
      <label>FirstName</label>
    <input type='text' name='firstName'onChange={this.handleChange} 
    value={this.state.firstName}/><br/>
    <label>LastName</label>
    <input type='text' name='lastName'onChange={this.handleChange} 
    value={this.state.lastName}/>
       <br/>
       <label>Age</label>
       <input type='number' name='age'onChange={this.handleChange}
       value={this.state.age}/>
       <br/>
      <button onClick={this.handleSubmit}>Submit</button>
      </div>)}
      {this.state.submit && (
      <div>
        <div>Name : {this.state.firstName}{this.state.lastName}</div>
        <button className='age' onclick={this.state.handleChange} type='text'>Show Age</button>
        {this.state.showage && (<div>
            {!this.state.showage &&(<div>
        <div>Name : {this.state.firstName}{this.state.lastName}</div>
        <div>Age is : {this.state.firstName}{this.state.lastName}</div>
        <button className='age' onclick={this.state.handleChange} type='text'>Hide Age</button></div>)}</div>)}


        </div>)}
      

    
       
       
        </div>
    )
  }
}
export default Input;


