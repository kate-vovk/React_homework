import React from 'react'
import PropTypes from 'prop-types'
import {routes} from '../service/RoutesConfig.js'
import {
    Switch,
    Route,
  } from "react-router-dom";
import PrivateRoute from './PrivateRoute.jsx';
import Admin from './Admin/Admin.jsx';

  const Routes = () => {
    return (
        <div>
            <Switch>
              {routes.map((route, index) => {
                if(route.private) { 
                  console.log("private", route.name);
                  return  <PrivateRoute key={index} path={route.path} component={route.component} />
              }
                else return <Route key={index} path={route.path} exact={route.exact} component={route.component}/>
              })}
             
            </Switch>
        </div>
    )
}

Routes.propTypes = {

}

export default Routes
