import { useCounter } from '../../hooks/useCounter'
import { renderHook, act } from '@testing-library/react-hooks'

describe('Pruebas en useCounter hook', () => {
  test('Debe de retornar los valores por defecto ', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, increment, decrement, reset } = result.current

    expect(counter).toBe(10)
    expect(typeof increment).toBe('function')
    expect(typeof decrement).toBe('function')
    expect(typeof reset).toBe('function')
  })

  test('Debe de tener el counter en 100', () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter } = result.current
    expect(counter).toBe(100)
  })

  test('Debe de retornar 11 al usar la funcion incrementar', () => {
    const { result } = renderHook(() => useCounter())
    act(() => result.current.increment())
    expect(result.current.counter).toBe(11)
  })

  test('Debe de retornar 10 al usar la funcion decrementar', () => {
    const { result } = renderHook(() => useCounter())
    act(() => result.current.decrement())
    expect(result.current.counter).toBe(9)
  })

  test('Debe de retornar 10 al usar la funcion reset', () => {
    const { result } = renderHook(() => useCounter())
    act(() => result.current.reset())
    expect(result.current.counter).toBe(10)
  })
})
