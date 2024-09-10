import React from 'react'
import Com_A from './Com_A'
import { createContext } from 'react'

export const data = createContext()
export const data1 = createContext()

let firstName  = "Arpit"
let lastName ="Busa"
let age =19
const Main = ({children}) => {
    return (
        <div>
            <data.Provider value={profile}>
                {children}
            </data.Provider>
        </div>
    )
}

export default Main
