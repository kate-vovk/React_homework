import React from 'react'
import PropTypes from 'prop-types'
import {Route, Switch, Link, useParams, useRouteMatch } from 'react-router-dom'
import { getMarkModels } from '../api/laptops'
import MarkModel from './MarkModel'
import NotFound from './NotFound'

const LaptopMarks = props => {
    const {url, path} = useRouteMatch();
    const {subPath, markPath} = useParams();
    // console.log('markPath', markPath, subPath);
    const markModels = getMarkModels(subPath, markPath);
    // console.log('markModels', markModels.length === 0);
    return (
        <div>
            <ul>
            {(markModels.length !== 0) ? markModels.map(model => {
                    return <li ><Link to={`${url}/${model}`}>{model}</Link></li>
                }
            ) : <NotFound />}
            </ul>
            <Switch>
                <Route path={`${path}/:modelPath`}><MarkModel /> </Route>
                {/* <Route component={NotFound}></ Route> */}
            </Switch>
        </div>
    )
}

LaptopMarks.propTypes = {

}

export default LaptopMarks
