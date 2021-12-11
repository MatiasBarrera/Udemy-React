import { shallow } from 'enzyme'
import React from 'react'
import TodoForm from '../../../../components/08-useReducer/components/TodoForm'

describe('Pruebas en TodoForm', () => {
  const handleAddTodo = jest.fn()
  const wrapper = shallow(<TodoForm handleAddTodo={handleAddTodo} />)

  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('No debe de llamar handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault() {} })

    expect(handleAddTodo).toHaveBeenCalledTimes(0)
  })

  test('Debe de llamar la funcion handleAddTodo', () => {
    const value = 'Aprender react'
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    })
    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault() {} })

    expect(handleAddTodo).toHaveBeenCalledTimes(1)
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object))
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    })
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
