import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import isEmail from 'validator/lib/isEmail'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

export const RegisterScreen = () => {
  const dispatch = useDispatch()
  const { msgError } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    name: 'matias',
    email: 'matias@gmail.com',
    password: '123456',
    password2: '123456'
  })

  const { name, email, password, password2 } = formValues

  const handleRegister = e => {
    e.preventDefault()

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(name, email, password))
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'))
      return false
    }
    if (email.trim().length === 0 && !isEmail(email)) {
      dispatch(setError('Email is not valid'))
      return false
    }
    if (password !== password2 || password.length < 5) {
      dispatch(
        setError(
          'Password should be at least 6 characters and match each other '
        )
      )
      return false
    }
    dispatch(removeError())
    return true
  }

  return (
    <>
      <h3 className="login__title">Register</h3>
      <form className="auth__form" onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="confirm"
          name="password2"
          autoComplete="off"
          value={password2}
          onChange={handleInputChange}
        />
        <button className="pointer" type="submit">
          Register
        </button>
        <hr />

        <Link to="/auth/login">Already registered?</Link>
      </form>
    </>
  )
}
