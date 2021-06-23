/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import PropTypes from 'prop-types'
import { Field, Formik, Form} from 'formik'
import { validateForm} from '../utils/formValidation';
import Input from './Input';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import {formStyle, buttonStyle} from '../styles/styles.js'


export function MyForm({onClickSendData}) {
    const onSubmitHandler = (values) => {
        onClickSendData(values);
    }
    return (
        <Formik 
        initialValues={{login: '', password: '', name:'', email: '', phone:'', birthday:''}}
        onSubmit={onSubmitHandler}
        validate = {validateForm}
        >
            {({isSubmitting, isValid}) => (
            <Form css={formStyle}>
                <Field id="login" type="text" name="login" label="login" component={Input}/>
                <br></br>
                <Field id="password" type="password" name="password" label="password" component={Input}/>
                <br></br>
                <Field id="name" type="text" name="name" label="name" component={Input}/>
                <br></br>
                <Field id="email" type="email" name="email" label="email" component={Input}/>
                <br></br>
                <Field id="phone" type="tel" name="phone" label="phone" component={Input}/>
                <br></br>
                <Field id="birthday" type="date" name="birthday" label="" component={Input}/>
                <br></br>
                <Button css={buttonStyle} disabled={isSubmitting || !isValid} type="submit" variant="contained" color="primary">
                  <span>Submit</span>  
                  <SendIcon/>
                </Button>
            </Form>
        )}

        </Formik>
        
    )
}


MyForm.propTypes = {
  onClickSendData: PropTypes.func.isRequired,
}

export default MyForm

