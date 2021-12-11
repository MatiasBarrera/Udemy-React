import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

  const [formsState, setFormsState] = useState({
    name: '',
    email: '',
  })
  const {name, email} = formsState

  useEffect(() => {
    // console.log('hey');
  }, [])

  useEffect(() => {
    // console.log('Cuando name cambia');
  }, [formsState])

  useEffect(() => {
    // console.log('Cuando email cambia');
  }, [email])

  const handleInputChange = (e) => {
    const {target} = e

    setFormsState({
      ...formsState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>Use Effect</h1> 
      <br />

      <div className="form-group">
        <input
          type="text"
          name="name" 
          className="form-control" 
          placeholder="tu nombre"
          autoComplete="off" 
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="email" 
          className="form-control" 
          placeholder="email@gmail.com"
          autoComplete="off" 
          value={email}
          onChange={handleInputChange}
        />
        
        { (name === '123') && <Message />}
        
      </div>
      <hr />
    </>
  )
}
