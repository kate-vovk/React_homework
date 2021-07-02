import React from 'react'
import PropTypes from 'prop-types'
import { useHistory, useRouteMatch } from 'react-router';
import GoBack from './GoBack';
import GoHome from './GoHome'

const NotFound = props => {
  const history = useHistory();
  console.log(history);
  console.log(props);
  return (
      <div>
        <h1>Sorry, can’t find that.</h1>
        <GoBack />
        <GoHome />
      </div>
  )
}
NotFound.propTypes = {

}

export default NotFound

