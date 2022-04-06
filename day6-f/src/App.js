import React, {Component} from 'react';
import FuncProps from './FuncProps.js'
import FuncEmployee from './FuncEmployee'
import FuncVoting from './FuncVoting'
import FuncHello from './FuncHello'

class App extends Component{
    
  render(){

  return(
    <div>
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


