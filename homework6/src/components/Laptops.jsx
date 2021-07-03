import React from 'react'
import PropTypes from 'prop-types'
import { getLaptopMarks } from '../api/laptops'
import { Link, useRouteMatch} from 'react-router-dom'
import GoBack from './GoBack'
import { getRoute } from '../service/RoutesConfig'

const Laptops = props => {
    const {url} = useRouteMatch();
    const laptopMarks = getLaptopMarks();
    const route = getRoute(url);
    return (
        <div>
            <ul>
            <h1>{route.name}</h1>
            {laptopMarks.map(mark => {
                    return <li key={mark}><Link to={`${url}/${mark}`}>{mark}</Link></li>
                }
            ) }
            </ul>
            <GoBack />

        </div>
    )
}

Laptops.propTypes = {

}

export default Laptops
