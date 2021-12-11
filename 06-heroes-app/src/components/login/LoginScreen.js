/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useHistory } from 'react-router-dom'
import { types } from '../../types/types'
import './login.css'

export const LoginScreen = () => {
  const history = useHistory()
  const { dispatch } = useContext(AuthContext)

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'
    dispatch({
      type: types.login,
      payload: {
        name: 'Matias'
      }
    })

    history.replace(lastPath)
  }

  return (
    <div className="login-container">
      <div className="login-card-container">
        <div className="login-card-header">
          <h1>Welcome</h1>
        </div>
        <div className="login-card-body">
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}
