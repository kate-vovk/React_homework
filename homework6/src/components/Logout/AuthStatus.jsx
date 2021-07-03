import React from 'react'
import PropTypes from 'prop-types'
import { useAuth } from '../../context/AuthContext'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'

const AuthStatus = props => {
    const auth = useAuth();
    const history = useHistory();

    const onLogoutClickHandler = () => {
      auth.signout() ;
    }
    const onLogInClickHandler = () => {
        history.push('/login');
    }
    return (
        <div style={{display:'flex'}}>
            {Boolean(auth.user) 
            ? (
            <div style={{display:'flex'}}>
                <Typography variant='h6' >Hello, {auth.user}</Typography> 
                <div style={{margin:'auto', marginLeft:15, backgroundColor:'white'}}>
                    <Button onClick={onLogoutClickHandler}>Log out</Button>
                </div>
            </div>)
            : (
            <div style={{display:'flex'}}>
                <Typography variant='h6' >You are not logged in</Typography>
                <div style={{margin:'auto', marginLeft:15, backgroundColor:'white'}}>
                        <Button onClick={onLogInClickHandler}>Log in</Button>
                </div>
            </div>)
            }
            
        </div>
    )
}

AuthStatus.propTypes = {

}

export default AuthStatus
