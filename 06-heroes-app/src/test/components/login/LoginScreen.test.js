import React from 'react'

import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/login/LoginScreen'
import { Router } from 'react-router'
import { AuthContext } from '../../../auth/AuthContext'
import { types } from '../../../types/types'

describe('Pruebas en LoginScreen', () => {
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: '',
    listen: jest.fn(),
    createHref: jest.fn()
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Matias'
    }
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <Router history={historyMock}>
        <LoginScreen />
      </Router>
    </AuthContext.Provider>
  )

  test('Debe de mostrar correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h1').text().trim()).toBe('Welcome')
  })

  test('Debe de realizar el dispatch y la navegacion', () => {
    wrapper.find('button').simulate('click')
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'Matias'
      }
    })

    expect(historyMock.replace).toHaveBeenCalled()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})
