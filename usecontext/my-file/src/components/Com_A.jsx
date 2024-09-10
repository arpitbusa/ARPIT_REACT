import React from 'react'
import Com_C from './Com_C'
import Com_D from './Com_D'

const Com_A = () => {
  return (
    <div>
      <h1 className='heading'>This is Component A {props.name}</h1>
      <Com_C name={props.name}/>
      <Com_D name={props.name}/>
    </div>
  )
}

export default Com_A
