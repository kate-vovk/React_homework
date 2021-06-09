import React, {useState, useEffect} from "react";
import '../css/style.css'
import PropTypes from 'prop-types'

// function getData(props) {
//     return new Promise((resolve) => resolve(props));
// }

export const Days = (props) => {
    const [days, setDays] = useState([]);
    const [images, setImages] = useState([]);
    useEffect(() => {
        // getData(props).then((result) => {
        //     setDays(result.days);
        //     setImages(result.images);
        // })
        setDays(props.days);
        setImages(props.images);

    }, [props])
    return (
        <ul>
            {days.map((item, index) => {
                const day = `Day ${index+1}.`;
                return <Day key={index} day={day} tasks={item} image={images[index]} />
            })}
        </ul>
    )
}

Days.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
        ])
    ).isRequired,
    days: PropTypes.array.isRequired,
}

class Day extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {tasks: [], image: []};
    }
    componentDidMount(){
        this.setState({tasks: this.props.tasks, image: this.props.image})
        
        // getData(this.props).then((result) => {
        //     // console.log("result", result);
        //     this.setState({tasks: result.tasks, image: result.image})
        //     // console.log(this.state.tasks);
        //     // console.log(this.state.image);
        // })
    }

    render(){
        return(
            <div>
                <h2>{this.props.day}</h2>
                <TaskList tasks = {this.state.tasks} />
                <img src={this.state.image} alt={this.state.image} />
            </div>
            
        )
    }
}

Day.propTypes = {
    image: PropTypes.string.isRequired,
    tasks: PropTypes.object.isRequired,
}

const TaskList = (props) => {
    let arr =[];
    Object.keys(props.tasks).map((key) => {
        arr.push(<ListItem key={key} task ={props.tasks[key].name} isDone={props.tasks[key].isDone}/>);
    })
    // for(let key in props.tasks){
    //     arr.push(<ListItem key={key} task ={props.tasks[key].name} isDone={props.tasks[key].isDone}/>);
    // }
    return <ul>
                {arr}
            </ul>;
}
Day.propTypes = {
    tasks: PropTypes.object.isRequired,
    name: PropTypes.shape({
        name: PropTypes.string,
        isDone: PropTypes.bool,
    }),
}

function ListItem (props){
    const className = (props.isDone) ? 'taskIsDone' : '';
    return (<li className={className}>
                {props.task}
            </li>)
}