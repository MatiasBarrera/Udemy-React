import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext)

  const handlerSetUser = () => {
    const user = {
      id: 123,
      userName: 'Barrera',
      email: 'matias.barrera95@gmail.com'
    }

    setUser(user)
  }
  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handlerSetUser}>
        Login
      </button>
    </div>
  )
}
