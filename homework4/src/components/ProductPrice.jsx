import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import {useCurrencyContext } from './CurrencyProvider'
import { ProductContext } from './ProductTable';
import { toUAH, toEUR } from '../utils/currencyConverter';

const ProductPrice = props => {
    const {currency} = useCurrencyContext();
    const {product} = React.useContext(ProductContext);    

    const onChangeCurrencyHandler = () => {
        if(currency === 'uah'){
            return toUAH(product.price);
        }
        if(currency ==='euro'){
            return toEUR(product.price);
        }
        return product.price;
    }
    return (
        <Paper>
            <Typography variant="h6" component='h2'>Price: {onChangeCurrencyHandler()} {currency}</Typography>
        </Paper>
    )
}

ProductPrice.propTypes = {

}

export default ProductPrice
