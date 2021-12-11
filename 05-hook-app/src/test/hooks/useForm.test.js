import { act, renderHook } from '@testing-library/react-hooks'
import useForm from '../../hooks/useForm'

describe('Pruebas en useForm hook', () => {
  const initialForm = {
    name: 'Matias',
    email: 'example@example'
  }

  test('Debe de retornar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [values, handleInputChange, reset] = result.current
    expect(values).toEqual(initialForm)
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe('function')
  })

  test('Debe de cambiar el valor del formulario (name)', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange] = result.current
    act(() =>
      handleInputChange({
        target: {
          name: 'name',
          value: 'Pablo'
        }
      })
    )
    const [values] = result.current
    expect(values).toEqual({ ...initialForm, name: 'Pablo' })
  })

  test('Debe de re-establecer el formulario con el reset()', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange, reset] = result.current
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Pablo'
        }
      })
      reset()
    })
    const [values] = result.current
    expect(values).toEqual(initialForm)
  })
})
