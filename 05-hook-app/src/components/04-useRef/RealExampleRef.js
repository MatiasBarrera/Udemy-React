import React, { useState } from 'react'
import { MultipleCustomHook } from '../03-example/MultipleCustomHook'

export const RealExampleRef = () => {
  const [show, setShow] = useState(false)
  
  const handleShow = () => setShow(!show)
  return (
    <div>
      <h1>Real Example Ref</h1>
      <br />
      { show && <MultipleCustomHook />}
      <button className="btn btn-primary mt-5" onClick={handleShow}>Show</button>
      <hr />
    </div>
  )
}
