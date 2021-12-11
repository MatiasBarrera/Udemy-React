import { getImagen } from "../../base/11-async-await";

describe('Prueba 11-async-await.js', () => {
  test('getImagen() debe retornar una URL de una imagen', async () => {
    const urlImage = await getImagen()

    expect(typeof urlImage).toBe('string')
    expect(urlImage.includes('https://')).toBeTruthy()
  });
});