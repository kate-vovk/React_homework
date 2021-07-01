import React from 'react'
import PropTypes from 'prop-types'
import {routes} from '../service/RoutesConfig.js'
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  
  
  const Routes = props => {
    return (
        <div>
            <Switch>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact}  
                component={route.component}
                // >{route.component}</Route>
                // render = {(props) => (<route.component {...props} routes={route.routes} />)} 
              />
            ))}
              {/* <Route exact path='/' render={()=> <p>Home</p>} />
              <Route path='/contacts' >
                <Contacts />
              </Route>
              <Route path='/electronics' >
                <Electronics />
              </Route>
              <Route>
                <NotFound />
              </Route> */}
            </Switch>
        </div>
    )
}

Routes.propTypes = {

}

export default Routes
