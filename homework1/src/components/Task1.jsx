import React from 'react';

function fullName (obj) {
  return `${obj.firstName} ${obj.lastName}`;
} 
export const WelcomeFunction = (props) => {
    const welcome = <h2>Welcome, {fullName(props)}!</h2>
    return welcome;
}
export class WelcomeClass extends React.Component{
    welcome = <h2>Welcome, {fullName(this.props)}!</h2>
    render () {
        return this.welcome;
    }
} 