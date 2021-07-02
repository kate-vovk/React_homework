import React from 'react'
import PropTypes from 'prop-types'
import { useRouteMatch } from 'react-router';
import { getRoute } from '../../service/RoutesConfig';

const Home = props => {
    const {url} = useRouteMatch();
    const route = getRoute(url);
    return (
        <div>
            <h1>{route.name} </h1> 
            <p>Home page</p>
        </div>
    )
}

Home.propTypes = {

}

export default Home
