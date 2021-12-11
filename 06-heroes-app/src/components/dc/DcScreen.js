import React, { useState } from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcScreen = () => {
  const [publisher] = useState('DC Comics')

  return (
    <div>
      <h1>DC Screen</h1>
      <br />
      <HeroesList publisher={publisher} />
    </div>
  )
}
