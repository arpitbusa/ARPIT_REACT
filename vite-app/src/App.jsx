import React, { Children } from 'react'
import './App.css'
import { createContext } from 'react'
import Layout from './components/Layout'

export const data = createContext('skillqode')

const obj = {
  fullname: 'Arihant',
  age: 19
}

const App = ({Children}) => {
  return (
    <div>
      <data.Provider value={obj}>
        <Layout>
        {Children}
        <h1 className='text-white bg-green-600'>this is layout page.</h1>
        </Layout>
      </data.Provider>
    </div>
  )
}

export default App