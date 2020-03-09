import React from 'react';
import toData from './ToData'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';



localStorage.setItem('toData', toData)

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      //  toData: localStorage.getItem('toData')
       toData: toData
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

  }

  
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toData={this.state.toData} toggleDone={this.toggleDone}/>
        <TodoForm handleSubmit={this.handleSubmit} addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
