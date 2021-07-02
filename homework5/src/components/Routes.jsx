import React from 'react'
import PropTypes from 'prop-types'
import {routes} from '../service/RoutesConfig.js'
import {
    Switch,
    Route,
  } from "react-router-dom";
  
  
  const Routes = () => {
    return (
        <div>
            <Switch>
              {routes.map((route, index) => {
                return <Route key={index} path={route.path} exact={route.exact}  component={route.component}
              />
              })}
            </Switch>
        </div>
    )
}

Routes.propTypes = {

}

export default Routes
