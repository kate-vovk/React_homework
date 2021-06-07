import React, {useState, useEffect} from "react";

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
            //console.log("result.days, result.images", result.days, result.images);
        })
        console.log("days, images", days, images);
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
        console.log("props", props);
    }
    componentDidMount(){
        console.log("componentDidMount");
        getData(this.props).then((result) => {
            console.log("result", result);
            this.setState({tasks: result.tasks, image: result.image})
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
    let isDone = false;
    for(let key in props.tasks){
        isDone = (key <= 5) ? true : false;
        arr.push(<ListItem key={key} task ={props.tasks[key]} isDone={isDone}/>);
    }
    //console.log(arr);
    return <ul style={{listStyle: 'none'}}>
                {arr}
            </ul>;
}


function ListItem (props){
    if(props.isDone){
        return <li style={{textDecoration: 'line-through'}}>
                  {props.task}
               </li>
    }
    else{
        return <li>
                 {props.task}
               </li>
    }
    
}