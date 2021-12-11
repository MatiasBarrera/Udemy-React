import { mount } from 'enzyme'
import React from 'react'
import { MemoryRouter, Route, Router } from 'react-router'
// import { AuthContext } from '../../../auth/AuthContext'
import { SearchScreen } from '../../../components/search/SearchScreen'

describe('Pruebas en SearchScreen', () => {
  test('Debe de mostrarse correctamente con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
  })

  test('Debe de mostrar a batman y el input con el valor del queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect(wrapper.find('input').prop('value')).toBe('batman')
    expect(wrapper.find('HeroCard').exists()).toBeTruthy()
  })

  test('Debe de mostrar error si el hero buscado no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )
    expect(wrapper.find('input').prop('value')).toBe('batman123')
    expect(wrapper.find('.alert-danger').text().trim()).toBe(
      'There is no a hero with: batman123'
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de llamar el push del history', () => {
    const historyMock = {
      push: jest.fn(),
      replace: jest.fn(),
      location: {
        hash: '',
        key: 've7stz',
        pathname: '/search',
        search: '?q=captain',
        state: undefined
      },
      listen: jest.fn(),
      createHref: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=captain']}>
        <Router history={historyMock}>
          <Route path="/search" component={() => <SearchScreen />} />
        </Router>
      </MemoryRouter>
    )

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'captain'
      }
    })
    wrapper.find('form').prop('onSubmit')({
      preventDefault() {}
    })

    expect(historyMock.push).toHaveBeenCalledWith('?q=captain')
    expect(wrapper).toMatchSnapshot()
  })
})
