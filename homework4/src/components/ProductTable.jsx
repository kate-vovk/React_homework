import React from 'react'
import PropTypes from 'prop-types'

import CurrencyBar from './CurrencyBar';
import {CardsContainerStyled } from '../styles/style';
import { getProducts } from '../api/store'
import ProductContent from './ProductContent';

export const ProductContext = React.createContext(null);

const ProductTable = props => {
    const [products, setProducs] = React.useState([]);

    React.useEffect(() => {
        getProducts({limit:5}).then(products_ => {
            setProducs(products_);
        })
        }, [products]);


    return (
        <div>
            <CurrencyBar />
            <CardsContainerStyled>
                {products.map(product => {
                    return (
                        <ProductContext.Provider value={{product}} key={product.id}>
                                <ProductContent />      
                        </ProductContext.Provider>
                        
                    )
                })}
            </CardsContainerStyled>
            
        </div>
    )
}

ProductTable.propTypes = {

}

export const useProductContext = () => {
    return React.useContext(ProductContext);
}
export default ProductTable
