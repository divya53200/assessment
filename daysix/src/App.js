import React, {Component} from 'react';
import Employee from './Employee'
import Props from'./Props'
import Voting from './Voting'
import Hello from './Hello.js'
import FuncProps from './FuncProps.js'
import FuncEmployee from './FuncEmployee'
import FuncVoting from './FuncVoting'
import FuncHello from './FuncHello'

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
    < FuncProps title='Beast'/>
          <FuncProps/>
          <FuncEmployee name='divya' salary={1000}/>
          <FuncEmployee name='diya' salary={245000}/>
          <div className='t'>
      <h2 className='v'>Voting</h2>
        <FuncVoting title="C" />
        <br/>
        <FuncVoting title="C++" />
        <br/>
        <FuncVoting title="Java"/>
        <br/>
        <FuncVoting title="Phython"/>
        
        </div>
   

        <FuncHello/>  

   
    </div>
      )
}
}
export default App;


