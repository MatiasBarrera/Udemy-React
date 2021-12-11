import React, { useState } from 'react'
import './counter.css'
export const CounterApp = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  })

  const {counter1, counter2} = state

  const handleAddition = () => {
    setState({
      ...state,
      counter1: counter1 + 1,
    })
  }
  return (
    <>
      <h1>CounterApp - useState</h1>
      <h2>Counter {counter1} </h2>
      <h2>Counter {counter2} </h2>
      <br/>
      <button className="btn btn-primary" onClick={handleAddition}>
        +1
      </button>
      <hr />
    </>
  )
}
