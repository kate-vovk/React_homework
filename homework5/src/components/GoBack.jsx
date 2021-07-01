import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'
const GoBack = props => {
    const history = useHistory();
    const onClickHandler = () => history.goBack();
    return (
        <div>
            <button onClick={onClickHandler}>Return to previous page</button>
        </div>
    )
}

GoBack.propTypes = {

}

export default GoBack
