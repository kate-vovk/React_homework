import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types'
import { getPosts } from '../api/posts';

import '../css/style.css'

export const Posts = (props) => {
    const pages = []; 
    const secondTaskPageAmount = 20;

    const [posts, setPosts] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postAmount, setPostAmount] = React.useState(10);
    const [isLoading, setLoading] = React.useState(false);
    const URL = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postAmount}`
    
    const isDisabled = (postAmount === 100);

    for (let i = 1; i<= 5; i++){
        pages.push(i);
    }

    const onGetPostsHandler = (pageNumber, amount) => {
        getPosts(URL).then(response => {
            setPostAmount(amount);
            setCurrentPage(Number(pageNumber));
            setPosts(response);
            setLoading(false);
        })
    }

    React.useEffect(() => {
        console.log("useEffect");
        setLoading(true);
        onGetPostsHandler(currentPage, postAmount);
    }, [currentPage, postAmount]);

    const onClickBtnHandler = () => {
        setPostAmount(postAmount+10);
    }

    const onClickPageHandler = (event) => {
        setCurrentPage(Number(event.target.id));
        setPostAmount(secondTaskPageAmount);
    }
    const onClickPreviousPageHandler = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage-1);
        }
    }
    const onClickNextPageHandler = () => {
        if(currentPage !== 5){
            setCurrentPage(currentPage+1);
        }
    }
    if (isLoading){
        return <p>Posts are loading...</p>
    }
    return (
        <div>
            <button disabled={isDisabled} onClick={onClickBtnHandler}>Show 10 more</button>
            <Paggination 
                onClickPageHandler = {onClickPageHandler}
                onClickPreviousPageHandler={onClickPreviousPageHandler}
                onClickNextPageHandler={onClickNextPageHandler}
                pages={pages}
                currentPage={currentPage}
            />
            <ul>
                {posts.map(post => {
                    return (
                        <Card key={post.id}
                            post={post}
                            currentPage = {currentPage}
                            users={props.users}
                        />
                    )
            })}
            </ul>
        </div>   
    )
}
Posts.propTypes = {
    users: PropTypes.object.isRequired,
}

export const Paggination = (props) => {
    return(
        <div className='paggination'>
        <button className='previous' onClick={props.onClickPreviousPageHandler}>Previous</button>
        {props.pages.map(number => {
            return (
                <button 
                    id={number}
                    key={number}
                    className={(props.currentPage===number) ? 'focus' : null} 
                    onClick={props.onClickPageHandler}
                >
                    {number}
                </button>
            )
        })}
        <button className='next' onClick={props.onClickNextPageHandler}>Next</button>
    </div>
    )
}
Paggination.propTypes = {
    onClickPageHandler: PropTypes.func.isRequired,
    onClickPreviousPageHandler: PropTypes.func.isRequired,
    onClickNextPageHandler: PropTypes.func.isRequired,
    pages: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
}

export const Card = (props) => {
    return (
        <li className='container'>
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
            <p className='user'>User: {props.users[props.post.userId]}</p>
        </li>
    )
}
Card.propTypes = {
    post: PropTypes.object.isRequired,
    currentPage: PropTypes.number.isRequired,
    users: PropTypes.object.isRequired,
}