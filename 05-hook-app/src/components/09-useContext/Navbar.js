import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="./">
          useContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              exact
              activeClassName="active"
              to="./"
              className="nav-link">
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="./about"
              className="nav-link">
              About
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="./login"
              className="nav-link">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
