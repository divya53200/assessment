import React, { Component } from 'react'
import './App.css'

class Voting extends Component {
    state = {
        count: 0,
    }
    handleVote = () => {
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
        <div>
            <div className='w'>
            <div>{this.props.title }   </div>
            <div>{this.state.count}</div>
            <div><button onClick={this.handleVote}>vote</button>
            </div>
            </div>
            
      </div>
    )
  }
}

export default Voting
