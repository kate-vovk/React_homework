import React from 'react'
import PropTypes from 'prop-types'
import { laptops, getLaptopMarks } from '../api/laptops'
import { Link, Switch, Route, useRouteMatch, useParams} from 'react-router-dom'
import LaptopMarks from './LaptopMarks'

const Laptops = props => {
    const {url, path} = useRouteMatch();
    const { subPath} = useParams();

    console.log(subPath, url, path);
    const laptopMarks = getLaptopMarks();
    console.log("laptopMarks", laptopMarks, laptopMarks.length===0);
    return (
        <div>
            <ul>
            {laptopMarks.map(mark => {
                    return <li ><Link to={`${url}/${mark}`}>{mark}</Link></li>
                }
            ) }
            </ul>
            <Switch>
                <Route path={`${path}/:markPath`}><LaptopMarks /></Route>
                {/* <Route exact path='/electronics/laptops'> */}
                {/* </Route> */}
            </Switch>
        </div>
        
    )
}

Laptops.propTypes = {

}

export default Laptops
