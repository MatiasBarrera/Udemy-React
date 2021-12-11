import { mount } from 'enzyme'
import React from 'react'
import { LoginScreen } from '../../../components/09-useContext/LoginScreen'
import { UserContext } from '../../../components/09-useContext/UserContext'

describe('Pruebas en LoginScreen', () => {
  const setUser = jest.fn()
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  )

  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de ejecutar el setUser', () => {
    const user = {
      id: 123,
      userName: 'Barrera',
      email: 'matias.barrera95@gmail.com'
    }

    wrapper.find('button').prop('onClick')()
    expect(setUser).toHaveBeenCalledWith(user)
  })
})
