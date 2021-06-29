import React from 'react'
import PropTypes from 'prop-types'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { CardStyled} from '../styles/style';
import { ProductContext } from './ProductTable';
import TitleDescription from './TitleDescription';
import ProductPrice from './ProductPrice';

// import { ProductContext } from './ProductTable';

const ProductContent = props => {
    const {product} = React.useContext(ProductContext);    

    return (
        <CardStyled >
            <CardMedia 
                    component="img"
                    alt='Product Photo'
                    image={product.image}
                />  
            <CardContent>
                <TitleDescription />
                <ProductPrice />
            </CardContent>
        </CardStyled>
    )
}

ProductContent.propTypes = {

}

export default ProductContent
