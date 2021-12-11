import React, { useState } from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {
  const [publisher] = useState('Marvel Comics')

  return (
    <div>
      <h1>Marvel Screen</h1>
      <br />
      <HeroesList publisher={publisher} />
    </div>
  )
}
