import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

  const {counter, increment} = useCounter()
  const [show, setShow] = useState(true)
  return (
    <div>
      <h1>Memorize</h1>
      <p>Counter: <Small value={counter} /></p>
      <button className="btn btn-primary" onClick={increment}>Increment</button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
      <br />
      <hr />
    </div>
  )
}
