import { laptops } from "../api/laptops"
import Contacts from "../components/Contacts"
import Other from "../components/Other"
import NotFound from "../components/NotFound"
import Laptops from "../components/Laptops"
import Electronics from "../components/Electronics"
import LaptopMark from "../components/LaptopMark"
import MarkModel from "../components/MarkModel"


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
        exact:true,
        component: Electronics,
        routes:[
            {
                path:'laptops',
                name: 'Laptops',
            },
            {
                path:'other',
                name: 'Other',
            },
        ]
    },
    {
        path:'/electronics/other', 
        name: 'Electronics other',
        component: Other,
    },
    {
        path:'/electronics/laptops', 
        exact: true,
        name: 'Electronics laptops',
        component: Laptops,
    },
    {
        path:'/electronics/laptops/:mark/:model', 
        name: 'Laptop model',
        component: MarkModel,
    },
    {
        path:'/electronics/laptops/:mark', 
        name: 'Laptop marks',
        component: LaptopMark,
    },
    
    {
        component: NotFound,
    },
]
