import { laptops } from "../api/laptops"
import Contacts from "../components/Contacts"
import Other from "../components/Other"
import NotFound from "../components/NotFound"
import Laptops from "../components/Laptops"
import { Link, Switch, Route } from "react-router-dom"
import Electronics from "../components/Electronics"



export const routes=[
    {
        path:'/', 
        exact: true,
        component: () => { return <p>Home</p>},
    },
    {
        path:'/contacts', 
        name: 'Contacts',
        component: Contacts,
    },
    {
        path:'/electronics', 
        name: 'Electronics',
        component: Electronics,
        routes:[
            {
                // path:'/electronics/laptops',
                path:'laptops',
                name: 'Laptops',
                component: Laptops,
            },
            {
                // path:'/electronics/other',
                path:'other',
                name: 'Other',
                component: Other,
            },
            // {
            //     // path:'/electronics', 
            //     component: NotFound,
            // },
        ]
    },
    {
        // path:'/electronics', 
        component: NotFound,
    },
]

// function Electronics({routes}) {
//     console.log(routes);
//     return ( 
//         <div>
//             <h2>Electronics </h2> 
//             <ul>
//                 {/* <li><Link to='/electronics/laptops'>Laptops</Link></li> */}
//                 <li><Link to='/electronics/other'>Other</Link></li>
//             </ul>
//             <Switch>
//                 {routes.map(route => (<Route path={route.path} component={route.component} />))}
//             </Switch>

//         </div>     
//     )
// }