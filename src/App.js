import React from 'react';
import toData from './ToData'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';



localStorage.setItem('toData', JSON.stringify(toData))

// console.log(localStorage.getItem('toData'))

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
       toData: JSON.parse(localStorage.getItem('toData'))
      //  toData: toData
    }
  }

  toggleDone = clickedID => {
    this.setState({
      toData: this.state.toData.map(item => {
        if(item.id === clickedID) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }

  addItem = itemName => {
    const newItem = {
      id: new Date(),
      task: itemName,
      completed: false
    }
    this.setState({
      toData: [...toData, newItem]
    })
  }

  clearFinished = e => {
    this.setState({
      toData: []
    })
  }

  
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {console.log(this.state.toData)}
        <TodoList toData={this.state.toData} toggleDone={this.toggleDone}/>
        <TodoForm handleSubmit={this.handleSubmit} addItem={this.addItem}/>
        <button onClick={this.clearFinished} >DELETE ALL</button>
      </div>
    );
  }
}

export default App;
