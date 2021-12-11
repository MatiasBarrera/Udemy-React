import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWitchCustomHook = () => {

  const {state: counter, increment, decrement, reset} = useCounter()

  return (
    <>
      <h1>CounterWithHook</h1>
      <h2>CounterWithHook: { counter }</h2>
      <br />
      <button className="btn btn-primary" onClick={increment}>+1</button>
      <button className="btn btn-primary" onClick={decrement}>-1</button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
      <hr />
    </>
  )
}
