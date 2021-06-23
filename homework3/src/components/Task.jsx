import React from 'react'
import PropTypes from 'prop-types'    
import { Modal } from './Modal'
import {SentData} from './SentData'

export const Task = props => {
    const [openModal, setOpenModal] = React.useState(false);
    const [data, setData] = React.useState([]);
    React.useEffect(()=>{
        console.log(data);
    }, [openModal, data]);

 
    return (
        <div>
            <Modal open={openModal} setOpen={setOpenModal} data={data} setData={setData}/>
            <SentData data={data}/> 
        </div>
    )
}

Task.propTypes = {

}

