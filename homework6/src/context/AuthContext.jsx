import { createContext } from "react";

import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from "react";

const authContext = createContext();

const auth = {
    isAuthenticated: false,
    signin(func = () => {}) {
        auth.isAuthenticated = true;
        func();
    },
    signout() {
        auth.isAuthenticated = false;
    }
};

const useProvideAuth = () =>{
    const [user, setUsername] = React.useState(localStorage.getItem('username'));
    const [password, setPassword] = React.useState(localStorage.getItem('password'));

    React.useEffect (() => {
        if (user!== null && password!== null && auth.isAuthenticated === false){
            signin(user, password);
        }

    }, []);

    const signin = (username, password, func = () => {}) => {
        return auth.signin(() => {
            setUsername(username);
            setPassword(password);
            func();
        })
    };
    const signout = () => {
        localStorage.clear();
        return auth.signin(() => {
            setUsername(null);
        })
    };

    return { user, password, signin, signout};
} 


export const AuthContext = ({children}) => {
    const auth = useProvideAuth();
    return (
        <div>
            <authContext.Provider value={auth}>
                {children}
            </authContext.Provider>
        </div>
    )
}

AuthContext.propTypes = {

}

export const useAuth = () => useContext(authContext);