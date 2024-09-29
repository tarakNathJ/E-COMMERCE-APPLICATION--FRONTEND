
import {  createBrowserRouter } from 'react-router-dom'
import axios from 'axios'
// import { Outlet } from 'react-router-dom'
import HomePage from '../Home/HomePage'

import ProductVarient from '../commponent/ProductVarient'  //'./commponent/ProductVarient'
import Language from '../Information/Language' // './Information/Language'
import AddToCart from  '../Information/AddToCart' //'./Information/AddToCart'
import ProfileDetails from  '../Information/ProfileDetails'  //'./Information/ProfileDetails'
import SelectByProduct from '../commponent/SelectByProduct'
import SignUp from '../commponent/SignUp'
import ProductBay from '../commponent/ProductBay'
import LogIn from '../commponent/LogIn'
import OrderPlace from '../commponent/OrderPlace'
import App from '../App'
import SearchingProductPage from '../commponent/SearchingProductPage'




const Router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
              path:'/',
              element:<HomePage/>,
              loader : ()=>fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/inventoryManager/GetAllFirstPageData`)
            },{
               path:'/ShowProductVarient',
               element:<ProductVarient/>
            },{
                path:'/Language',
                element:<Language/>
            },{
                path:'/AddToCart',
                 element:<AddToCart/>
            },{
                path:'/Profile',
                element:<ProfileDetails/>
            },{
                path:'/SelectByProduct',
                element:<SelectByProduct/>
            },{
                path:'/SignUp',
                 element:<SignUp/>
            },{
                path:'/ProductBuy',
                element:<ProductBay/>
            },{
                path:'/LogIn',
                element:<LogIn/>
            },{
                path:'/OrderPlace',
                 element:<OrderPlace/>
            },{
                path:'/SearchingProduct',
                element:<SearchingProductPage/>
            }
            
        ]
    }
]);

export default Router;