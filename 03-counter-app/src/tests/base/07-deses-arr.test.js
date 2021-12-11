import { retornaArreglo } from '../../base/07-deses-arr'

describe('Pruebas de 07-deses-arr.js', () => {
  test('retornaArreglo() debe de retornar un string y un numero', () => {
    const [letras, numeros] =  retornaArreglo()

    // expect(arreglo).toEqual(['ABC', 123])
    expect(letras).toBe('ABC')
    expect(numeros).toBe(123)

  });
});