/* eslint-disable jest/no-conditional-expect */
import { getHeroeByIdAsync } from "../../base/09-promesas";

describe('Prueba 09-promesas.js', () => {
  test('getHeroeByIdAsync() debe retornar un heroe async', async () => {
    const id = 1
    const heroe = await getHeroeByIdAsync(id)
    expect(heroe).not.toBeNull()
  });

  test('getHeroeByIdAsync() debe retornar null si no existe heroe', (done) => {
    const id = 10

    getHeroeByIdAsync(id)
      .catch(error => {
        console.log(error)
        expect(error).toBe('No se pudo encontrar el héroe')
        done()
      })
  });
});