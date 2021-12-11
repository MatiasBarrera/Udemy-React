import React from 'react'
import { mount } from 'enzyme'
import { DashboardRoutes } from '../../routers/DashboardRoutes'
import { MemoryRouter } from 'react-router'
import { AuthContext } from '../../auth/AuthContext'

describe('Pruebas en DashboardRoutes', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Matias'
    }
  }

  test('Debe de mostrar el componente correctamente ', () => {
    const wrapper = mount(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <DashboardRoutes></DashboardRoutes>
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.container-user').text().trim()).toBe('Matias')
  })
})
