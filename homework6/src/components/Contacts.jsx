import React from 'react'
import PropTypes from 'prop-types'
import {getRoute } from '../service/RoutesConfig'
import { useRouteMatch } from 'react-router-dom'

const Contacts = props => {
    const {url} = useRouteMatch();
    const route = getRoute(url);
    return (
        <div>
            <h1>{route.name} </h1> 
            <ul>
                <li>Contact1</li>
                <li>Contact2</li>
                <li>Contact3</li>
            </ul>
        </div>
    )
}

Contacts.propTypes = {

}

export default Contacts