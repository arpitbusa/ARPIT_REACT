import React from 'react'
import { data , data1 } from './main';
import { useContext } from 'react'

const Com_D = () => {
  const profile = useContext(data);
  const age = useContext(data1);
  return (
    <div>
      <h1 className='heading'>This is Component D {profile.firstName}{profile.lastName}</h1>
    </div>
  )
}

export default Com_D
