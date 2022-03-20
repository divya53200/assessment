import React, {Component} from 'react';
import Employee from './Employee'
import Props from'./Props'
import Voting from './Voting'
import Hello from './Hello.js'
import './App.css'

class App extends Component{
    state={
        title:'beast',
        
    }
  render(){

  return(
    <div>
        <Props title={this.state.title}/>
    <Employee name ='Pavi' salary={50000} />  
    <Employee name ='Subi' salary={70000} />


    <div className='t'>
      <h2 className='v'>Voting</h2>
        <Voting title="C" />
        <br/>
        <Voting title="C++" />
        <br/>
        <Voting title="Java"/>
        <br/>
        <Voting title="Phython"/>

        </div>
        
    <Props/>
    <Hello/>
   
    </div>
      )
}
}
export default App;


