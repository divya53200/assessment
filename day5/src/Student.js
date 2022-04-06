import React,{Component} from 'react';
import './student.css'

class Student extends Component{
    state={
        name:'Divya',
        age:22,
    }
    render(){
    return(
       <div>
       <h1> My name is : <u><span className = 'student'> {this.state.name}</span></u>
         and My age is: <u><span className='student1'>{this.state.age}</span></u></h1>
       </div>
    )
    }
}
export default Student