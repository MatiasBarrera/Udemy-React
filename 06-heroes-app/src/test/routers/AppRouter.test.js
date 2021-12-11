import React from 'react'
import { mount } from 'enzyme'
import { AppRouter } from '../../routers/AppRouter'
import { AuthContext } from '../../auth/AuthContext'

describe('Pruebas en AppRouter', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  }

  test('Debe de mostrar login si no esta autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de mostrar el componenete de Marvel si esta autenticado', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: 'Matias'
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )

    expect(wrapper.find('nav').exists()).toBeTruthy()
  })
})
