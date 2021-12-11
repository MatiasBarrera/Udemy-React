import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const {name, email, password} = formValues

  useEffect(() => {
  }, [email])


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form with Custom hook Use Effect</h1> 
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

        <input
          type="password"
          name="password" 
          className="form-control" 
          placeholder="**********"
          autoComplete="off" 
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
      <hr />
    </form>
  )
}
