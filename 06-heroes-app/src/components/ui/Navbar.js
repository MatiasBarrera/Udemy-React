import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
import '../ui/index.css'

export const Navbar = () => {
  const history = useHistory()
  const { user, dispatch } = useContext(AuthContext)

  const handleLogout = () => {
    history.replace('/login')
    dispatch({
      type: types.logout
    })
  }

  return (
    <nav>
      <Link className="brand" to="/">
        Asociaciones
      </Link>

      <div className="container-links">
        <NavLink activeClassName="active" exact to="/marvel">
          Marvel
        </NavLink>

        <NavLink activeClassName="active" exact to="/dc">
          DC Comics
        </NavLink>

        <NavLink activeClassName="active" exact to="/search">
          Search
        </NavLink>
      </div>
      <div className="container-user">{user.name}</div>
      <div className="container-logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  )
}
