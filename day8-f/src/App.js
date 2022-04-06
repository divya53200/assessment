import React, {Component} from 'react';
import FuncRegister from './FuncRegister.js'
import FuncSubmit from './FuncSubmit'
import FuncInput from './FuncInput.js'


class App extends Component{
  render(){

  return(
    <div>
   <FuncRegister/>   
    <FuncSubmit/>
    <FuncInput/>
    </div>
      )
}
}
export default App;

