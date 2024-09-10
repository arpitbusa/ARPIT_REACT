import React from 'react'
import Com_D from './Com_D'

const Com_C = () => {
  return (
    <div>
      <h1 className='heading'>This is Component C {props.name}</h1>
      <Com_D name={props.name}/>
    </div>
  )
}

export default Com_C
