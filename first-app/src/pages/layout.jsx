import React from 'react'
import { Pageobject } from './Pageobject'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
                path: "/blog",
                element:Pageobject.blog ,
            },
            {
                path: "/pages",
                element:Pageobject.pages ,
            },
            {
                path: "/product",
                element:Pageobject.product ,
            },
            {
                path: "/shop",
                element:Pageobject.shop ,
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