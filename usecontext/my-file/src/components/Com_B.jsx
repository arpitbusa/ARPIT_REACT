import React from 'react'
import Com_E from './Com_E'
import Com_F from './Com_F'

const Com_B = () => {
  return (
    <div>
      <h1 className='heading'>This is Component B {props.name}</h1>
      <Com_E name={props.name}/>
      <Com_F name={props.name}/>
    </div>
  )
}

export default Com_B
