import React from 'react'
import PropTypes from 'prop-types'
import {Route, Switch, Link, useParams, useRouteMatch } from 'react-router-dom'
import { getModel } from '../api/laptops'
import NotFound from './NotFound'

const MarkModels = props => {
    const {url, path} = useRouteMatch();
    const {subPath, markPath, modelPath} = useParams();
    const model = getModel(subPath, markPath, modelPath);
    console.log('Boolean', Boolean(model))
    return (
        <div>
            <div>
                {Boolean(model) ? model.description  : <NotFound /> }
            </div>
            {/* <Switch>
                <Route component={NotFound} />
            </Switch> */}
        </div>   
    )
}

MarkModels.propTypes = {

}

export default MarkModels
