import { useState } from 'react'

export const useCounter = (inicialState = 10) => {
  const [counter, setCounter] = useState(inicialState)

  const increment = () => setCounter(counter + 1)
  const decrement = () => {
    const isLessThanZero = counter - 1 === 0
    isLessThanZero ? setCounter(1) : setCounter(counter - 1)
  }
  const reset = () => setCounter(inicialState)

  return { counter, increment, decrement, reset }
}
