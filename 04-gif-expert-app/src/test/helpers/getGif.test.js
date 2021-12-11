import { getGif } from "../../helpers/getGifs";

describe('Pruebas de helper getGif()', () => {
  test('Debe de traer 10 elementos', async () => {
    const totalElement = 10
    const gifs =  await getGif('hunter x hunter')
    expect(gifs.length).toBe(totalElement)
  });

  test('Debe de traer 0 elementos cuando no tenga categoria', async () => {
    const totalElement = 0
    const gifs =  await getGif('')

    expect(gifs.length).toBe(totalElement)
  });
});