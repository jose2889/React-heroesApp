import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MarvelPage } from '../components/marvel/MarvelPage'


import { DcPage } from '../components/dc/DcPage'
import { HeroPage } from '../components/heroes/HeroPage'
import { SearchPage } from '../components/search/SearchPage'

export const DashBoardRoutes = () => {
    console.log("llega");
    return (
        <>
            <Navbar /> 

            <div className="container mt-2">
                <Switch> 
                    <Route exact path="/marvel" component={MarvelPage} /> 
                    <Route exact path="/hero/:heroeId" component={HeroPage} />
                    <Route exact path="/dc" component={DcPage} />
                    <Route exact path="/search" component={SearchPage} />


                    <Redirect to="/marvel" />

                </Switch>
            </div>
        </>
            
    )
}
