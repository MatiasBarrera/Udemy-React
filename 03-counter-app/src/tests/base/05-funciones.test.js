import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser()

    expect(user).toStrictEqual( userTest )

  });

  test('getUsuarioActivo debe de retornar un objeto', () => {
    const nombre = 'matias'
    const userTest = {
      uid: 'ABC567',
      username: nombre,
    }

    const userActive = getUsuarioActivo(nombre)

    expect(userActive).toStrictEqual(userTest)
  });
});