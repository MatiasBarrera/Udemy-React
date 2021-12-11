import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'


export const LayoutEffect = () => {
  const {counter,increment,decrement} = useCounter(1)
  const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
  const { quote } = !!data && data[0] // si existe data extrae la posicion 0 

  return (
    <>
      <h1>Layout Effect</h1>
      <blockquote className="blockquote text-right">
        <p className="mb-0">{quote}</p>
      </blockquote>
      <button className="btn btn-primary" hidden={loading} onClick={increment}>Next Quote</button>
      <button className="btn btn-secondary" hidden={loading} onClick={decrement}>Prev Quote</button>
      <br />
      <hr />
    </>
  )
}
