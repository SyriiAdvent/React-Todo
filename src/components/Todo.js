import React from 'react'
import './Todo.css'

const Todo = ({ item, toggleDone }) => {
  const { id, task, completed } = item

  return (
    <div onClick={() => toggleDone(id)}
    className={`item${completed ? ' complete' : '' }`}
    >
      <h4>{task}</h4>
    </div>
  )
}

export default Todo