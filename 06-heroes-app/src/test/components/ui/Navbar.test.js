import React from 'react'

import { Navbar } from '../../../components/ui/Navbar'
import { mount } from 'enzyme'
import { AuthContext } from '../../../auth/AuthContext'
import { MemoryRouter, Router } from 'react-router'
import { types } from '../../../types/types'

describe('Pruebas en Navbar', () => {
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
    <MemoryRouter>
      <AuthContext.Provider value={contextValue}>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </AuthContext.Provider>
    </MemoryRouter>
  )

  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.container-user').text().trim()).toBe('Matias')
  })

  test('Debe de llamar logout y el usar useHistory', () => {
    wrapper.find('button').simulate('click')
    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout })
    expect(historyMock.replace).toHaveBeenCalledWith('/login')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})
