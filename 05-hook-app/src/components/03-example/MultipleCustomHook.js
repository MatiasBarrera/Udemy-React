import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHook = () => {
  const { counter, increment, decrement } = useCounter(1)

  const { loading, data } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  )

  const { author, quote } = !!data && data[0] // si existe data extrae la posicion 0

  return (
    <>
      <h1>Breakingback Quotes</h1>
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote || 'no registros'}</p>
          <br />
          <footer className="blockquote-footer">
            {author || 'no registros'}
          </footer>
        </blockquote>
      )}
      <button className="btn btn-primary" hidden={loading} onClick={increment}>
        Next Quote
      </button>
      <button
        className="btn btn-secondary"
        hidden={loading}
        onClick={decrement}>
        Prev Quote
      </button>
      <br />
      <hr />
    </>
  )
}
