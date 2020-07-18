import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";

import { LoginPage } from '../components/login/LoginPage';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const RouterApp = () => {

    const {user} = useContext(AuthContext); 

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginPage} isAuthenticated={user.logged} />
                    <PrivateRoute path="/" component={DashBoardRoutes} isAuthenticated={user.logged} />

                </Switch>
            </div>
    </Router>
    )
}
