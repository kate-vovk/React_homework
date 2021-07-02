import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}

Layout.propTypes = {

}

export default Layout