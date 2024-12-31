import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Wishlist from './Wishlist'
import Profile from './Profile'
import Login from './Login'
import Error from './Error'
import SignUp from './SignUp'
import Buy from './Buy'

const Route = createBrowserRouter([
  {
    path:'/',
    Component:Navbar,
    children:[
      {path:'/',Component:Home},
      {
        path:'/shop',
        Component:Shop
      },
      {
        path:'/profile',
        Component:Profile
      },
      {
        path:'/login',
        Component:Login
      },
      {
        path:'*',
        Component:Error
      },
      {
        path:'/cart',
        Component:Cart
      },
      {
        path:'/wishlist',
        Component:Wishlist
      },
      {
        path:'/SignUp',
        Component:SignUp
      },
      {
        path:'/Buy',
        Component:Buy
      }
      
    ]
  }
])


const Layout = () => {
  return (
    <div>
      <RouterProvider router={Route}/>
    </div>
  )
}

export default Layout