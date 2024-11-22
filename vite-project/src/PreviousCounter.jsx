import React from 'react'
import { useState } from 'react'

const PreviousCounter = () => {
const[count , setcount] = useState(1);

  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-3xl text-center'>Previous Counter</p>
      <div className='bg-slate-400 w-32 *py-2 justify-center '>
        <p className=''>&#8722</p>
      </div>
    </div>
  )
}

export default PreviousCounter
// &#8722 (-)
// &#43 (+)