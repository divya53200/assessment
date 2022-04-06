import React,{Component} from 'react'




class Input extends Component{
    state={
        firstName:'',
        lastName:'',
        age:'',
        submit:false,
        showage:false,
    }
     handleChange=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }

     handleSubmit=(e)=>{e.preventDefault();this.setState({submit:true})}
     handleReset=(e)=>{e.preventDefault();this.setState({firstName:'',lastName:'',
     
     age:'',
     })}
     handleshowage=(e)=>{e.preventDefault();this.setState({showage:true})}
     handlehideage=(e)=>{e.preventDefault();this.setState({showage:false})}
      handletoggle=(e)=>{e.preventDefault();this.setState({showage:!this.state.showage})}
  
  render(){
    return(
      <div>
        <div className='border border-4 border-dark mt-10 col-3 bg-white '>
          {!this.state.submit && (
              <div>
      <label>FirstName</label>
    <input type='text' name='firstName'onChange={this.handleChange} 
    value={this.state.firstName}/><br/><br/>
    <label>LastName</label>
    <input type='text' name='lastName'onChange={this.handleChange} 
    value={this.state.lastName}/>
       <br/><br/>
       <label>Age</label>
       <input type='number' name='age'onChange={this.handleChange}
       value={this.state.age}/>
       <br/><br/>
      <button className='btn btn-outline-primary' onClick={this.handleSubmit}>Submit</button>
      <button className='btn btn-outline-secondary' onClick={this.handleReset}>RESET</button>
      </div>)}
      </div>


              {this.state.submit&&<div class=' w-25 m-5 p-2 border border-3 border-dark'>
                
               <label> NAME:{this.state.firstName}  {this.state.lastName}</label><br/>
               {
                     this.state.showage&&<div>
                 <label>AGE:{this.state.age} </label><br/>    
                 </div> 
                 }
               <button className='btn btn-secondary' onClick={this.handletoggle}>{this.state.showage?'Hide Age':'Show Age'}</button>
                    </div>}
                

    
       
       
        </div>
    )
  }
}
export default Input;


