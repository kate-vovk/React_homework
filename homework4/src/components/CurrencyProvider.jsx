import React from 'react'
import PropTypes from 'prop-types'

export const CURRENCY = {
    usd: 'usd',
    uah: 'uah',
    eur: 'euro',
  }
  
const CurrencyContext = React.createContext(
{
    currency: CURRENCY.usd,
    setCurrency: () => {},
}
);

export const CurrencyProvider = (props) => {
    const [currency, setCurrency] = React.useState(CURRENCY.usd);
    return  <CurrencyContext.Provider {...props} value={{currency, setCurrency}} />
}

CurrencyProvider.propTypes = {

}

export const useCurrencyContext = () => {
    const productContext = React.useContext(CurrencyContext);
    // if(!productContext) {
    //     throw new Error('useProductContext should be called inside ThemeProvider!')
    //   }
    // console.log('productContext', productContext);
    return productContext;
}