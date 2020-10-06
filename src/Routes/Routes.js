import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Login, Register, Verification, Profile } from '../js/Pages'


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Home/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/register'>
                    <Register/>
                </Route>
                <Route path='/verification'>
                    <Verification/>
                </Route>
                <Route path='/profile'>
                    <Profile/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
