import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heores';

describe('Prueba 08-imp-exp.js', () => {
  test('getHeroeById() debe retornar un heroe por id', () => {
    const id = 1
    const heroe = getHeroeById(id)

    const heroeData = heroes.find(heroe => heroe.id === id)
    
    expect(heroe).toStrictEqual(heroeData)
  });

  test('getHeroeById() debe retornar undefined si no existe el id', () => {
    const id = 10
    const heroe = getHeroeById(id)
 
    expect(heroe).toBe(undefined)
  });

  test('getHeroesByOwner() debe retornar herores de DC', () => {
    const owner = 'DC'
    const heroesByOwner = getHeroesByOwner(owner)

    const heroeData = heroes.filter(heroe => heroe.owner === owner)

    expect(heroesByOwner).toStrictEqual(heroeData)
  });

  test('getHeroesByOwner() debe retornar herores de Marvel', () => {
    const owner = 'Marvel'
    const heroesByOwner = getHeroesByOwner(owner)

    const heroeData = heroes.filter(heroe => heroe.owner === owner)

    expect(heroesByOwner).toStrictEqual(heroeData)
  });
});