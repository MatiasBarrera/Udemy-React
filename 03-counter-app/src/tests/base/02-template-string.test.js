
import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe de retornar hola matias barrera', () => {
    const nombre = 'matias'
    const apellido = 'barrera'
    
    const saludo = getSaludo(nombre, apellido)

    expect(saludo).toBe(`Hola matias barrera`)
  });

  test('getSaludo debe retornar hola carlos', () => {
     
    const saludo = getSaludo()

    expect(saludo).toBe(`Hola carlos `)
  });
});