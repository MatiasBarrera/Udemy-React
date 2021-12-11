import React from 'react'

import { mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen'
import { MemoryRouter, Route, Router } from 'react-router'

describe('Pruebas en HeroScreen', () => {
  test('Debe de mostrar el componente redirect si no hay argumentos en el URL ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen></HeroScreen>
      </MemoryRouter>
    )
    expect(wrapper.find('Redirect').exists()).toBeTruthy()
  })

  test('Debe de mostrar un hero si el parametro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    )
    expect(wrapper.find('.hero-container').exists()).toBeTruthy()
    // hero/marvel-spider
  })

  test('Debe de regresar a la pantalla anterior con push', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
      listen: jest.fn(),
      location: {
        hash: '',
        key: 'swr98l',
        pathname: '/hero/marvel-spider',
        search: '',
        state: ''
      }
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Router history={historyMock}>
          <Route path="/hero/:heroeId" component={() => <HeroScreen />} />
        </Router>
      </MemoryRouter>
    )
    wrapper.find('button').prop('onClick')()
    expect(historyMock.push).toHaveBeenCalledWith('/')
    expect(historyMock.goBack).not.toHaveBeenCalled()
  })

  test('Debe de regresar a la pantalla anterior goBack', () => {
    const historyMock = {
      length: 10,
      push: jest.fn(),
      goBack: jest.fn(),
      listen: jest.fn(),
      location: {
        hash: '',
        key: 'swr98l',
        pathname: '/hero/marvel-spider',
        search: '',
        state: ''
      }
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Router history={historyMock}>
          <Route path="/hero/:heroeId" component={() => <HeroScreen />} />
        </Router>
      </MemoryRouter>
    )
    wrapper.find('button').prop('onClick')()
    expect(historyMock.goBack).toHaveBeenCalled()
    expect(historyMock.push).toHaveBeenCalledTimes(0)
  })

  test('Debe de llamar al redirect si el hero no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider12312312323']}>
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    )

    expect(wrapper.text()).toBe('')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})
