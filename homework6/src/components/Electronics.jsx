
import React from 'react'
import PropTypes from 'prop-types'
import { Link, useRouteMatch } from 'react-router-dom'
import {getRoute } from '../service/RoutesConfig'

const Electronics = props => {
    const {url} = useRouteMatch();
    const route = getRoute(url);
    return ( 
        <div>
            <h1>{route.name} </h1> 
            <ul>
                {route.routes.map(({path, name}) => (
                    <li><Link to={`${url}/${path}`}>{name}</Link></li>
                ))}
            </ul>
        </div>     
    )
}

Electronics.propTypes = {

}

export default Electronics
