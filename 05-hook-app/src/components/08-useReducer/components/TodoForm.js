import React from 'react'
import PropTypes from 'prop-types'
import useForm from '../../../hooks/useForm'

const TodoForm = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

  const handleSubmit = e => {
    e.preventDefault()

    if (description.trim().length <= 1) {
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    handleAddTodo(newTodo)
    reset()
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="aprender..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-primary mt-1 w-100">Agregar</button>
      </form>
    </>
  )
}

TodoForm.propTypes = {
  handleAddTodo: PropTypes.func.isRequired
}

export default TodoForm
