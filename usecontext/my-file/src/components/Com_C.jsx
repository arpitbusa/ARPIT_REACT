import React from 'react'
import { data, data1 } from './main'
import { useContext } from 'react'

const Com_C = () => {

    const name = useContext(data)
    const age = useContext(data1)
  return (
    <div>
      
      <h1 className='heading'>This is Component D {name}{age}</h1>


    </div>
  )
}

export default Com_C
