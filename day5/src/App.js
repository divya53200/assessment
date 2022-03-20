import React, {Component} from 'react';
import Print from './Print.js'
import Student from './Student.js'
import Count from './Count.js'
import Contact from './Contact.js'
import Register from './Register.js'



class App extends Component{
  render(){

  return(
    <div>

    <Print/>
    <Student/>
    <Count/>
    <Contact/>
    <Register/>
   
    </div>
      )
}
}
export default App;
