import React, { Component } from 'react'

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
       task: ''
    }
  }

  handleChange = e => {
    this.setState({
      task: e.target.value,
    })
    console.log(this.state.task)
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.task)
    this.setState({
      task: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        name='task'
        type='text'
        value={this.state.item}
        onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    )
  }
}

export default TodoForm