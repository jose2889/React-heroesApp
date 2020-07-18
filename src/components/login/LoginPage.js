import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginPage = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const lastPath = localStorage.getItem('lastPath') || "/";
 
    const handleLogin = () => {
        
        dispatch({
            type: types.login,
            payload: {
                name: 'JOSE'
            }
        })
        history.push(lastPath)

    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button onClick={handleLogin} className="btn btn-primary"> Ingresar</button>
        </div>
    )
}
