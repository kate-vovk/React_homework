import React from 'react'
import PropTypes from 'prop-types'
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import Input from './Input';

const Login = props => {
    // const [username, setUserName] = React.useState('');
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();
    const {from} = location.state || {from: {pathname:"/"}};
    
    const onLoginClickHandler = ({username}) => {
        if(username !== ""){
            auth.signin(username, () => {history.replace(from.pathname);}
            )
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            {/* <input type="text" placeholder="Name" onChange={(e) => setUserName(e.target.value)}></input>
            <button onClick={onLoginClickHandler}>Log in</button> */}
            <Formik
                initialValues={{username: '', password:''}}
                validate={({username, password}) =>{
                    const errors={};
                    if(!username) {errors.username = 'Required'};
                    if(!password) {errors.password = 'Required'};

                    return errors;
                }}
                onSubmit = {onLoginClickHandler}
            >
            {({isSubmitting, isValid}) => (
                <Form>
                    <Field type='text' name='username' label='username' placeholder='username' component={Input}></Field>
                    <br></br>
                    <Field type='password' name='password' label='password'  placeholder='password' component={Input}></Field>
                    <br></br>
                    <button type='submit' disabled={isSubmitting}>Log in</button>

                </Form>
            )

            }
            </Formik>
        </div>
    )
}

Login.propTypes = {

}

export default Login
