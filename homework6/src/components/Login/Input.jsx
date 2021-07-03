import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

const Input = ({
    field,
    form:{touched, errors},
    label,
}) => {
    const inputLabel = (touched[field.name] && errors[field.name]) ? errors[field.name] : label;
    return (
        <div>
            <TextField error={touched[field.name] && errors[field.name]} label={inputLabel} {...field}/>
        </div>
    )
}

Input.propTypes = {

}

export default Input
