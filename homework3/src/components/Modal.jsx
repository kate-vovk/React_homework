/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {dialogTitleStyle, titleStyle} from '../styles/styles.js'

import MyForm from './MyForm'


export function Modal({open, setOpen, data, setData}) {
    const [timerValue, setTimerValue] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => setTimerValue((prevTimer) => prevTimer + 1), 1000);
        return () => clearInterval(timer);
    }, [timerValue]);
    const handleOpen = () => {
        setTimerValue(0);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const onClickSendData = (inputData) => {
        inputData.seconds = timerValue;
        console.log('timer', timerValue);
        const dataTemp = data;
        dataTemp.push(inputData);
        setData(dataTemp);
        handleClose();
    }  

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Open dialog
            </Button>  
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle onClose={handleClose}>
                    Some Form 
                </DialogTitle>
                <MyForm onClickSendData={onClickSendData}/>
            </Dialog>
            
        </div>
    )
}
Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,

    data: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired,
}

const DialogTitle = (props) => {
    const {children, onClose} = props;
    return(
        <MuiDialogTitle css={dialogTitleStyle} disableTypography>
            <Typography css={titleStyle} variant='h6'>{children}</Typography>
            <IconButton aria-label='close' onClick={onClose}>
                <CloseIcon />
            </IconButton>
        </MuiDialogTitle>
    )
}

