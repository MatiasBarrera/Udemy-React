describe('Pruebas en el archivo demo.js.test', () => {
  test('deben de ser iguales los strings', () => {
    //inicializacion
    const mensaje = 'hola mundo'
    
    //estimulo
    const mensaje2 = `hola mundo`
  
    //observar comportamiento
    expect(mensaje).toBe(mensaje2)
  });
});