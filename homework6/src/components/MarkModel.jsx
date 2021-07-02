import React from 'react'
import PropTypes from 'prop-types'
import {useParams, useRouteMatch } from 'react-router-dom'
import { getModel } from '../api/laptops'
import NotFound from './NotFound'
import GoBack from './GoBack'
import { getRoute } from '../service/RoutesConfig'

const MarkModel = props => {
    const {path} = useRouteMatch();
    const {mark, model} = useParams();
    const _model = getModel('laptops', mark, model);
    const route = getRoute(path);

    return (
        <div>
            <h1>{`${route.name}: ${mark} ${model}`}</h1>
            <div>
                {Boolean(_model) ? _model.description  : <NotFound /> }
            </div>
            <GoBack />
        </div>   
    )
}

MarkModel.propTypes = {

}

export default MarkModel
