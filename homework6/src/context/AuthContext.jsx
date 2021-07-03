import { createContext } from "react";

import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from "react";

const authContext = createContext();

const auth = {
    isAuthenticated: false,
    signin(func) {
        auth.isAuthenticated = true;
        func();
    },
    signout() {
        auth.isAuthenticated = false;
    }
};

const useProvideAuth = () =>{
    const [user, setUser] = React.useState(null);

    const signin = (username, func) => {
        return auth.signin(() => {
            setUser(username);
            func();
        })
    };
    const signout = () => {
        return auth.signin(() => {
            setUser(null);
        })
    };

    return { user, signin, signout};
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