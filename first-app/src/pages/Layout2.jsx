import React from 'react'
import { Pageobject } from './Pageobject'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const List = createBrowserRouter([
    {
        path: '/',
        element: Pageobject.navbar,
        children: [
            {
                path: "/",
                element: Pageobject.Home,
            },
            {
                path: "/blog",
                element: Pageobject.Blog,
            },
            {
                path: "/pages",
                element: Pageobject.Pages,
            },
            {
                path: "/product",
                element: Pageobject.Product,
            },
            {
                path: "/shop",
                element: Pageobject.Shop,
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