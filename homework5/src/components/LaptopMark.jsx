import React from 'react'
import PropTypes from 'prop-types'
import {Link, useParams, useRouteMatch } from 'react-router-dom'
import { getMarkModels } from '../api/laptops'
import NotFound from './NotFound'
import GoBack from './GoBack'

const LaptopMarks = props => {
    const {url} = useRouteMatch();
    const {mark} = useParams();
    const markModels = getMarkModels('laptops', mark);
    console.log('mark url', url, mark);
    return (
        <div>
            <h3>fd</h3>
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
