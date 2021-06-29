import React from 'react'
import PropTypes from 'prop-types'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import { useProductContext } from './ProductTable';

const TitleDescription = props => {
    const {product} = useProductContext();

    return (
        <Accordion square>
            <AccordionSummary id={product.id}>
                <Typography variant="h5" component='h2'>{product.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2" component='p'>{product.description}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

TitleDescription.propTypes = {

}

export default TitleDescription
