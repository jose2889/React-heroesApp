import React, { useReducer, useEffect } from 'react'
import { RouterApp } from './routers/RouterApp'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('user'))  || {logged: false}; 
}
export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        
        localStorage.setItem('user', JSON.stringify(user));
        
    }, [user])
    return (
        <div>
            <AuthContext.Provider value={{user, dispatch}}>
                <RouterApp/>
            </AuthContext.Provider>
        </div>
    )
}
