import React from 'react'
import PropTypes from 'prop-types'
import { useHistory, useRouteMatch } from 'react-router';
import GoBack from './GoBack';
// import {
//     Route,
//     Link,
//   } from "react-router-dom";

// function Status({ code, children}){
//     return (
//       <Route
//         render={({staticContext}) => {
//           if (staticContext){
//             staticContext.status = code;
//           }
//           return children;
//         }}
//       />
//     )
//   }

// const NotFound = props => {
//   const history = useHistory();
//   console.log(history);
//   console.log(props);
//   return (
//     <Status code={404}>
//       <div>
//         <h1>Sorry, can’t find that.</h1>
//         {/* <p>history {history}</p> */}
//         <p>path {props.path}</p>
//       </div>
//     </Status>
//   )
// }

const NotFound = props => {
  const history = useHistory();
  console.log(history);
  console.log(props);
  return (
    // <Status code={404}>
      <div>
        <h1>Sorry, can’t find that.</h1>
        <GoBack />
      </div>
    // </Status>
  )
}
NotFound.propTypes = {

}

export default NotFound

