import React from 'react'
import { shallow } from 'enzyme'
import TodoListItem from '../../../../components/08-useReducer/components/TodoListItem'
import { demoTodos } from '../../../fixtures/demoTodos'

describe('Pruebas en TodoListItem', () => {
  const handleDelete = jest.fn()
  const handleToggle = jest.fn()

  const wrapper = shallow(
    <TodoListItem
      todos={demoTodos[0]}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  )

  test('Debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de llamar a la funcion handleDelete', () => {
    wrapper.find('button').simulate('click')
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
  })

  test('Debe de llamar a la funcion handleToggle', () => {
    wrapper.find('p').simulate('click')
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
  })

  test('Debe de mostrar el texto correctamente', () => {
    const p = wrapper.find('p').text().trim()
    expect(p).toBe(`1 ${demoTodos[0].desc}`)
  })

  test('Debe de tener la clase complete si el TODO.done = true', () => {
    const todo = demoTodos[0]
    todo.done = true
    const wrapper = shallow(
      <TodoListItem
        todos={todo}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    )

    expect(wrapper.find('p').hasClass('complete')).toBeTruthy()
  })
})
