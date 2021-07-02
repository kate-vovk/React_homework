import React from 'react'
import PropTypes from 'prop-types'
import { getElectronics } from '../api/store' 

const Electronics = props => {
    const [electronics, setElectronics] = React.useState([]);
    React.useEffect(()=> {
        getElectronics({limit:6}).then(products => {
            setElectronics(products);
            console.log('response', products);
        })
        // console.log(electronics);
    }, [electronics])
    return (
        <div>
            <p>Some electronics list</p>
            <ol>
                {electronics.map(item => (<li key={item.id}>{item.title}</li>))}
            </ol>
        </div>
    )
}

Electronics.propTypes = {

}

export default Electronics
