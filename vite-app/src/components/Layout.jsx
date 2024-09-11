import React from 'react'
import Card from './card'
const Layout = ({children}) => {
    return (
        <div>
            <Card>
                {children}
            </Card>
        </div>
    )
}

export default Layout
