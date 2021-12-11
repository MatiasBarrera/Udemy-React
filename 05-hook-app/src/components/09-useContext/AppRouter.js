import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Navbar } from './Navbar'

import { AboutScreen } from './AboutScreen'
import { LoginScreen } from './LoginScreen'
import { HomeScreen } from './HomeScreen'
import { NotFoundScreen } from './NotFoundScreen'

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={LoginScreen} />

            <Route exact component={NotFoundScreen} />
          </Switch>
        </div>
      </>
    </Router>
  )
}
