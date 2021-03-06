// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import ToDo from './Todo'

const TodoList = props => {
  return (
    <div>
      {props.toData.map( item => <ToDo key={item.id} item={item} toggleDone={props.toggleDone} />)}
    </div>
  )
}

export default TodoList
