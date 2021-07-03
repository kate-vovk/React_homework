import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'
import AuthStatusBar from './AuthStatusBar'
import { SidebarAndContentContainerStyled, ContentContainerStyled } from './styles'

const Layout = ({children}) => {
    return (
        <div>
            <AuthStatusBar />
            <SidebarAndContentContainerStyled elevation={0}>
                <Sidebar />
                <ContentContainerStyled elevation={0}>
                    {children}
                </ContentContainerStyled>
            </SidebarAndContentContainerStyled>
            
        </div>
    )
}

Layout.propTypes = {

}

export default Layout