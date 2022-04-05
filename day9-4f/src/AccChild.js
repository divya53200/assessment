import React, {Component} from 'react';
import './accchild.css'




class App extends Component{
    state={
        detailinfo:false,
    }
    handleToggle=()=>{
        this.setState({detailinfo:!this.state.detailinfo})
    }
  render(){

  return(
    <div>
        <div className='box1'>
    <h6 >{this.props.title}</h6>
   <p> <button className='rounded-circle' onClick={this.handleToggle}>{this.state.detailinfo?'-':'+'}</button></p>
    {this.state.detailinfo&&<div>{this.props.info}</div>}
    </div>
    </div>
    
      )
      

}
}
export default App;
