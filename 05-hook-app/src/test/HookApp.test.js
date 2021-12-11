import React from 'react'
import { shallow } from 'enzyme'
import HookApp from '../HookApp'

describe('Pruebas en HookApp.js', () => {
  test('Deberia mostrar correctamente el componente <HookApp /> ', () => {
    const wrapper = shallow(<HookApp />)
    expect(wrapper).toMatchSnapshot()
  })
})
