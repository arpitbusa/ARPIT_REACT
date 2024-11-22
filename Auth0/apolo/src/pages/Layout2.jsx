import React from 'react'
import {Pageobject} from './Pageobject'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const List = createBrowserRouter([
    {
        path:'/',
        element:Pageobject.navbar ,
        children:[
            {
                path: "/",
                element:Pageobject.home ,
            },
            {
                path: "/about",
                element:Pageobject.aboutus ,
            },
            {
                path: "/contact",
                element:Pageobject.contactus ,
            },
            {
                path: "/shop",
                element:Pageobject.shop ,
            },
            {
                path: "/login",
                element:Pageobject.login ,
            },
            {
                path: "/cart",
                element:Pageobject.cart ,
            },
        ]
    }
])

const Layout2 = () => {
    return (
        <div>
            <RouterProvider router={List}></RouterProvider>
        </div>
    )
}

export default Layout2