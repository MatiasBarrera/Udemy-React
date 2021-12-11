import {renderHook} from '@testing-library/react-hooks'
import { useFetchGifts } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs.js', () => {
  test('Debe de retornar el estado inicial', async () => {
    const {result, waitForNextUpdate} = renderHook( () => useFetchGifts('One Punch') )
    const {data, loading} = result.current
    
    await waitForNextUpdate()

    expect(data).toEqual([])
    expect(loading).toBeTruthy()
    
  });

  test('Debe de retornar un arreglo de imagenes y loading en false', async () => {
    const {result, waitForNextUpdate} = renderHook( () => useFetchGifts('One Punch') )
    await waitForNextUpdate()
    
    const {data, loading} = result.current
    expect(data.length).toBe(10)
    expect(loading).toBeFalsy()
  });
});