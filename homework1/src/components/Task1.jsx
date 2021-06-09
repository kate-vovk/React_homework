import React from 'react';
import PropTypes from 'prop-types'

function fullName (obj) {
  return `${obj.firstName} ${obj.lastName}`;
} 
export const WelcomeFunction = (props) => {
    const welcome = <h2>Welcome, {fullName(props)}!</h2>
    return welcome;
}
WelcomeFunction.propTypes ={
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}

export class WelcomeClass extends React.PureComponent{
    welcome = <h2>Welcome, {fullName(this.props)}!</h2>
    render () {
        return this.welcome;
    }
} 

WelcomeClass.propTypes ={
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}