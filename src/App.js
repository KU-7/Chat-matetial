import React from 'react'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ChatRoom from './pages/ChatRoom'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" component={ChatRoom} />
      </Switch>
    </Router>
  )
}

export default App
