import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import { List, ListItem } from '@material-ui/core';

const Sidebar = props => {
    return (
       <Drawer variant='permanent' >
        <Toolbar >
          <List>
            <ListItem><Link to='/'>Home </Link></ListItem>
            <ListItem><Link to='/contacts'>Contacts</Link></ListItem>
            <ListItem><Link to='/electronics'>Electronics</Link></ListItem>
            {/* <li><Link to='/electronics/other'>Other</Link></li> */}

          </List>
        </Toolbar>
        
      </Drawer>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
