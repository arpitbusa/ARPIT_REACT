import React from 'react'
import Com_A from './Com_A'
import Com_B from './Com_B'
import { createContext } from 'react'

export const data = createContext()
export const data1 = createContext()

const Main = (props) => {
    return (
        <>
        <div>
            <data.Provider value={name}>
                <Com_A />
            </data.Provider>
        </div>
        <div>
        <data.Provider value={name}>
            <Com_B />
        </data.Provider>
    </div>
    </>
    )
}

export default Main
