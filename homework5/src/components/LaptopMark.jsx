import React from 'react'
import PropTypes from 'prop-types'
import {Link, useParams, useRouteMatch } from 'react-router-dom'
import { getMarkModels } from '../api/laptops'
import NotFound from './NotFound'
import GoBack from './GoBack'
import { getRoute } from '../service/RoutesConfig'

const LaptopMarks = props => {
    const {url, path} = useRouteMatch();
    const {mark} = useParams();
    const markModels = getMarkModels('laptops', mark);
    const route = getRoute(path);
    return (
        <div>
            <h1>{`${route.name}: ${mark}`}</h1>
            <ul>
            {(markModels.length !== 0) ? markModels.map(model => {
                    return <li ><Link to={`${url}/${model}`}>{model}</Link></li>
                }
            ) : <NotFound />}
            </ul>
            <GoBack />
        </div>
    )
}

LaptopMarks.propTypes = {

}

export default LaptopMarks
