import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import googleLogo from '../../assets/google.logo.svg'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: 'matias@gmail.com',
    password: '123456'
  })

  const handleLogin = e => {
    e.preventDefault()
    dispatch(startLoginEmailPassword(email, password))
  }

  const handleLoginGoogle = () => {
    dispatch(startGoogleLogin())
  }

  const { email, password } = formValues
  return (
    <>
      <h3 className="login__title">Login</h3>
      <form className="auth__form" onSubmit={handleLogin}>
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
        <button className="pointer" type="submit" disabled={loading}>
          Ingresar
        </button>
        <hr />

        <div className="login__social-network">
          <p>Login with social network</p>
          <div
            className="google-btn pointer mt-1 mb-1"
            onClick={handleLoginGoogle}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src={googleLogo}
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register">Create new account</Link>
      </form>
    </>
  )
}
