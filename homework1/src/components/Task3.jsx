import React, {useState, useEffect} from "react";
import '../css/style.css'

function getData(props) {
    return new Promise((resolve) => resolve(props));
}

export const Days = (props) => {
    const [days, setDays] = useState([]);

    const [images, setImages] = useState([]);
    useEffect(() => {
        getData(props).then((result) => {
            setDays(result.days);
            setImages(result.images);
        })
        // console.log("days, images", days, images);
    }, [days, images, props])
    return (
        <ul>
            {days.map((item, index) => {
                const day = `Day ${index+1}.`;
                return <Day key={index} day={day} tasks={item} image={props.images[index]} />
            })}
        </ul>
    )
}

class Day extends React.Component{
    constructor(props){
        super(props);
        this.state = {tasks: [], image: []};
        // console.log("props", props);
    }
    componentDidMount(){
        getData(this.props).then((result) => {
            // console.log("result", result);
            this.setState({tasks: result.tasks, image: result.image})
            // console.log(this.state.tasks);
            // console.log(this.state.image);
        })
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

const TaskList = (props) => {
    let arr =[];
    for(let key in props.tasks){
        arr.push(<ListItem key={key} task ={props.tasks[key].name} isDone={props.tasks[key].isDone}/>);
    }
    return <ul>
                {arr}
            </ul>;
}


function ListItem (props){
    if(props.isDone){
        return <li className='taskIsDone'>
                  {props.task}
               </li>
    }
    else{
        return <li>
                 {props.task}
               </li>
    }
    
}