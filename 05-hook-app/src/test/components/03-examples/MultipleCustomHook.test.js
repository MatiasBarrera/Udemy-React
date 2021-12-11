import React from 'react'
import { shallow } from 'enzyme'
import { MultipleCustomHook } from '../../../components/03-example/MultipleCustomHook'
import { useFetch } from '../../../hooks/useFetch'
import { useCounter } from '../../../hooks/useCounter'

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('Pruebas en MultipleCustomHook', () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
      decrement: () => {}
    })
  })

  test('Debe de mostrarse correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })

    const wrapper = shallow(<MultipleCustomHook />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Matias',
          quote: 'Hola mundo'
        }
      ],
      loading: false,
      error: null
    })

    const wrapper = shallow(<MultipleCustomHook />)

    expect(wrapper.find('.alert').exists()).toBeFalsy()
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo')
    expect(wrapper.find('footer').text().trim()).toBe('Matias')
  })
})
