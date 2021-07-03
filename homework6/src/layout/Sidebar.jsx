import React from 'react'
import PropTypes from 'prop-types'
import {
    Link,
  } from "react-router-dom";

import { List, ListItem } from '@material-ui/core';
import { SidebarToolbarStyled, SidebarDrawerStyled } from './styles';

const Sidebar = props => {
    return (
       <SidebarDrawerStyled variant='permanent'>
        <SidebarToolbarStyled>
          <List>
            <ListItem><Link to='/'>Home </Link></ListItem>
            <ListItem><Link to='/contacts'>Contacts</Link></ListItem>
            <ListItem><Link to='/electronics'>Electronics</Link></ListItem>
            <ListItem><Link to='/admin'>Admin page</Link></ListItem>

          </List>
        </SidebarToolbarStyled>
        
      </SidebarDrawerStyled>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
