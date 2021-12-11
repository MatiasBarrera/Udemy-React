import React, { useEffect, useReducer } from 'react'
import todoReducer from './todoReducer'
import './styles.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const init = () => JSON.parse(localStorage.getItem('todos')) || []

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = todoId => {
    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch(action)
  }

  const handleToggle = todoId => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  const handleAddTodo = newTodo => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }

  return (
    <div className="container">
      <h1>
        TodoApp
        <small> ({todos.length})</small>
      </h1>
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-5">
          <TodoForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
      <br />
      <hr />
    </div>
  )
}

export default TodoApp
