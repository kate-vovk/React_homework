import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
import { routes } from '../service/RoutesConfig'
import NotFound from './NotFound'

const ElectronicsTest = (props) => {
    const { subPath} = useParams();
    // const {url, path} = useRouteMatch();
    const route = routes.find(route => route.path === props.path).routes.find(route => route.path === subPath);
    // console.log('subPath', subPath, route, path, url);
    console.log('route', route, Boolean(route));
    return (
        <div>
            {/* <h2>{route.name}</h2> */}
            {/* <p>{route.component}</p> */}
            {Boolean(route) ? <route.component {...props} /> : <NotFound />}

            {/* <Route key={route.name} path={route.path} exact={route.exact}  
                component={route.component}
                // >{route.component}</Route>
                // render = {(props) => (<route.component {...props} routes={route.routes} />)} 
              /> */}
        </div>
    )
}

ElectronicsTest.propTypes = {

}

export default ElectronicsTest
