import React, { useState,useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10)

  // const increment = () => setCounter(counter + 1)

  const increment = useCallback((num) => {
    setCounter(c => c + num)
  }, [ setCounter ])

  return (
    <div>
      <h1>Callback Hook</h1>
      <h2>Counter {counter}</h2>
      <ShowIncrement increment={increment}/>
      <br />
      <hr />
    </div>
  )
}
