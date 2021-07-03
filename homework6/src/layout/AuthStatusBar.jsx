import React from 'react'
import PropTypes from 'prop-types'
import AppBar  from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AuthStatus from '../components/Logout/AuthStatus'
const AuthStatusBar = props => {
    return (
            <AppBar >
                <Toolbar>
                    <AuthStatus />
                </Toolbar>
            </AppBar>        
    )
}

AuthStatusBar.propTypes = {

}

export default AuthStatusBar
