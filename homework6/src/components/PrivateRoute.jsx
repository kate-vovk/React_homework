import React from 'react'
import PropTypes from 'prop-types'
import { useAuth } from '../context/AuthContext'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component:Component, ...props}) => {
    let auth = useAuth();
    return (
        <Route {...props} render={(componentProps) => 
        (Boolean(auth.user) && Boolean(auth.password))
            ? <Component {...componentProps} />
            : <Redirect to={{pathname:'/login', state:{from: componentProps.location}}} /> //pass props: 'from' = componentProps.location==='/admin' to Login 
        } />
    )
}

PrivateRoute.propTypes = {

}

export default PrivateRoute
