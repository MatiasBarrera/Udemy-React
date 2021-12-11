import React from 'react'
import PropTypes from 'prop-types'

const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        className={`${todo.done && 'complete'}`}
        onClick={() => handleToggle(todo.id)}>
        {index + 1}. {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default TodoListItem
