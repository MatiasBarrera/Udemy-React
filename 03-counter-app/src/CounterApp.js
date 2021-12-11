import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {
 const [counter, setCounter] = useState(value)
  
  const handleSum = () => setCounter(counter + 1)
  const handleSubstract = () => setCounter(counter - 1)
  const handleReset = () => setCounter(value)

  return <>
    <h1>CounterApp</h1>
    <p>{ counter }</p>
    <button onClick={ handleSum }>+ 1</button>
    <button onClick={ handleReset }>🔙</button>
    <button onClick={ handleSubstract }>- 1</button>
  </>
}

CounterApp.propTypes = {
  value: PropTypes.number
}


export default CounterApp