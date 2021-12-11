import { getAuth, onAuthStateChanged } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'

import {
  BrowserRouter as Router,
  Switch,
  // Route,
  Redirect
} from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, user => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [dispatch, setChecking, setIsLoggedIn, isLoggedIn])

  if (checking) {
    return <h1>Cargando...</h1>
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            exact
            isLoggedIn={isLoggedIn}
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  )
}
