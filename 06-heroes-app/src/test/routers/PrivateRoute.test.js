import { mount } from 'enzyme'
import React from 'react'
import { MemoryRouter } from 'react-router'
import { PrivateRoute } from '../../routers/PrivateRoute'

describe('Pruebas en PrivateRoute', () => {
  const props = {
    location: {
      pathname: '/marvel'
    }
  }

  Storage.prototype.setItem = jest.fn()

  test('Debe de mostrar el componenete si esta autenticado y guardar localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>listo</span>}
          {...props}
        />
      </MemoryRouter>
    )
    expect(wrapper.find('span').exists()).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
  })

  test('Debe de bloquear el componente si no esta autenticado', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>listo</span>}
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBeFalsy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
  })
})
