import React from 'react'
import { shallow } from 'enzyme'
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef'

describe('Pruebas en RealExampleRef', () => {
  let wrapper = shallow(<RealExampleRef />)
  beforeEach(() => {
    wrapper = shallow(<RealExampleRef />)
  })
  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MultipleCustomHook').exists()).toBeFalsy()
  })

  test('Debe de mostrar el componente MultipleCustomHook', () => {
    wrapper.find('button').simulate('click')
    expect(wrapper.find('MultipleCustomHook').exists()).toBeTruthy()
  })
})
