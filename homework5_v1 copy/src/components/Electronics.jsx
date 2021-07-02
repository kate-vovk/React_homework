
import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch, useRouteMatch, useLocation } from 'react-router-dom'
import { routes } from '../service/RoutesConfig'
import ElectronicsCategories from './ElectronicsCategories'
import GoBack from './GoBack'
import GoHome from './GoHome'

const Electronics = props => {
    const {url, path} = useRouteMatch();
    const location = useLocation();
    const electronicsRoutes = routes.find(item => item.path==='/electronics');
    // console.log('electronicsRoutes', electronicsRoutes);
    // console.log('url', url);
    // console.log('path', path);
    console.log('location', location);
    return ( 
        <div>
            <h2>Electronics </h2> 
            <ul>
                {electronicsRoutes.routes.map(({path, name}) => (
                    <li><Link to={`${url}/${path}`}>{name}</Link></li>
                ))}
                {/* <li><Link to='/electronics/laptops'>Laptops</Link></li>
                <li><Link to='/electronics/other'>Other</Link></li> */}
            </ul>
            {/* {console.log(`${path}/:myPath`)} */}
            <Switch>{
                <Route path={`${path}/:subPath`}><ElectronicsCategories path={path}/></Route>
                // electronicsRoutes.routes.map(({url, component}) => {
                //     console.log(`${path}/:myPath`);
                //     console.log('component', component);
                //     return <Route path={`${path}/${url}`}><ElectronicsTest /></Route>
                // })
            }
            </Switch>
            {/* <GoBack />
            <GoHome /> */}
        </div>     
    )
}

Electronics.propTypes = {

}

export default Electronics
