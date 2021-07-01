import React from 'react'
import PropTypes from 'prop-types'
import {useParams, useRouteMatch } from 'react-router-dom'
import { getModel } from '../api/laptops'
import NotFound from './NotFound'
import GoBack from './GoBack'
const MarkModel = props => {
    const {url} = useRouteMatch();
    const {subPath, mark, model} = useParams();
    const _model = getModel('laptops', mark, model);
    console.log('Boolean', url, Boolean(model), subPath, mark, model)
    return (
        <div>
            <div>
                {Boolean(_model) ? _model.description  : <NotFound /> }
                <GoBack />
            </div>
        </div>   
    )
}

MarkModel.propTypes = {

}

export default MarkModel
