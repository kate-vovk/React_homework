
import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch, useRouteMatch, useLocation } from 'react-router-dom'
import { routes } from '../service/RoutesConfig'
import GoBack from './GoBack'
import GoHome from './GoHome'

const Electronics = props => {
    const {url} = useRouteMatch();
    const electronicsRoutes = routes.find(item => item.path==='/electronics');
    return ( 
        <div>
            <h2>Electronics </h2> 
            <ul>
                {electronicsRoutes.routes.map(({path, name}) => (
                    <li><Link to={`${url}/${path}`}>{name}</Link></li>
                ))}
            </ul>
            <GoBack />
        </div>     
    )
}

Electronics.propTypes = {

}

export default Electronics
