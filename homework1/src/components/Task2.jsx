import React from 'react';

export const Buttons = (props) => {
    return(
        <div>
            {
                props.colors.map((item) => {
                const k = `${item}ID`;
                return <Button key={k} color={item}/>; 
                })
            }
            
            {/* <Button color='red'></Button>
            <Button color='orange'></Button>
            <Button color='yellow'></Button>
            <Button color='green'></Button>
            <Button color='blue'></Button> */}
        </div>   
    );
}

class Button extends React.Component{
    render(){
        return(
            <button className={this.props.color} style={{backgroundColor: this.props.color}}>{this.props.color}</button>
        )
    }
}