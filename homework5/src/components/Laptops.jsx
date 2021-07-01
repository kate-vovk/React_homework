import React from 'react'
import PropTypes from 'prop-types'
import { getLaptopMarks } from '../api/laptops'
import { Link, useRouteMatch, useParams} from 'react-router-dom'
import GoBack from './GoBack'
const Laptops = props => {
    const {url, path} = useRouteMatch();
    const { subPath} = useParams();

    // console.log(subPath, url, path);
    const laptopMarks = getLaptopMarks();
    // console.log("laptopMarks", laptopMarks, laptopMarks.length===0);
    return (
        <div>
            <ul>
            {laptopMarks.map(mark => {
                    return <li ><Link to={`${url}/${mark}`}>{mark}</Link></li>
                }
            ) }
            </ul>
            <GoBack />

        </div>
    )
}

Laptops.propTypes = {

}

export default Laptops
