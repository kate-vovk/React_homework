import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import {CURRENCY, useCurrencyContext } from './CurrencyProvider'
import { CurrencyContainerStyled } from '../styles/style';

const CurrencyBar = props => {
    const {currency, setCurrency} = useCurrencyContext();

    const toUAHCurrencyHandler = ()  => {
        setCurrency(CURRENCY.uah);
    }
    const toUSDCurrencyHandler = ()  => {
        setCurrency(CURRENCY.usd);
    }
    const toEURCurrencyHandler = ()  => {
        setCurrency(CURRENCY.eur);
    }
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6">Currency: {currency}</Typography>
                <CurrencyContainerStyled>
                    <IconButton onClick={() => setCurrency(toUAHCurrencyHandler)}>
                        <img alt='hryvnia-icon' src="https://img.icons8.com/material-outlined/21/ffffff/ukrainian-hryvnia.png"/>                
                    </IconButton>
                    <IconButton color='inherit' type='button' onClick={() => setCurrency(toUSDCurrencyHandler)}>
                        <img  alt='us-dollar-icon' src="https://img.icons8.com/material-outlined/21/ffffff/us-dollar--v1.png"/>                
                    </IconButton>
                    <IconButton type='button' onClick={() => setCurrency(toEURCurrencyHandler)}>
                        <img alt='euro-icon' src="https://img.icons8.com/material-outlined/24/ffffff/euro-pound-exchange.png"/>                
                    </IconButton>
                </CurrencyContainerStyled>
            </Toolbar>
        </AppBar>
        
    )
}

CurrencyBar.propTypes = {

}

export default CurrencyBar
