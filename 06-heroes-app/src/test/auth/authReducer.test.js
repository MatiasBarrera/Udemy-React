import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types'

describe('Pruebas es authReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {})
    expect(state).toEqual({ logged: false })
  })

  test('Debe de autorizar y colocar el name del usuario', () => {
    const action = {
      type: types.login,
      payload: { name: 'Matias' }
    }

    const state = authReducer({ logged: false }, action)
    expect(state).toEqual({
      logged: true,
      name: 'Matias'
    })
  })

  test('Debe de borrar el name del usuario y logged en false', () => {
    const action = {
      type: types.logout
    }

    const state = authReducer({ logged: true, name: 'Matias' }, action)
    expect(state).toEqual({
      logged: false
    })
  })
})
