import { Switch, Route } from 'react-router-dom'
import AddSession from '../containers/AddSession'
import Register from '../containers/Register'
import DashBoard from './DashBoard'
import React from 'react'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={DashBoard}/>
        <Route path='/login' component={AddSession}/>
        <Route path='/register' component={Register}/>
        <Route path='/dashboard' component={DashBoard}/>
      </Switch>
    </main>
  )

export default Main