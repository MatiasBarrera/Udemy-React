import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch'

describe('Pruebas en useFetch hook', () => {
  test('Debe de retornar la informacion por defecto', () => {
    const { result } = renderHook(() =>
      useFetch(`https://breakingbadapi.com/api/quotes/1`)
    )
    const { data, loading, error } = result.current
    expect(data).toBeNull()
    expect(loading).toBeTruthy()
    expect(error).toBeNull()
  })

  test('Debe de tener la informacon deseada. Loading = false, error = null', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://breakingbadapi.com/api/quotes/1`)
    )

    await waitForNextUpdate({ timeout: 3000 })

    const { data, loading, error } = result.current
    expect(data.length).toBe(1)
    expect(loading).toBeFalsy()
    expect(error).toBeNull()
  })

  test('Debe de manejar el error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/apid/users?page=2`)
    )

    await waitForNextUpdate({ timeout: 3000 })

    const { data, loading, error } = result.current
    expect(data).toBeNull()
    expect(loading).toBeFalsy()
    expect(error).toBe('No se pudo cargar la info')
  })
})
