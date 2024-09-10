import React from 'react'
import { useState } from 'react'

const UseState = () => {

    const [count , setCount]  = useState(0)


    const handleIncrease = () => {
        setCount(count + 1)  
    }

    const handleDecrese = () => {
        setCount(count - 1)
    }
    
  return (
    <div className='text-center'>
      <p className='bg-red-200 py-2 px-4 mb-4 text-black font-bold'>Count :<span className='font-medium'>{count}</span></p>
      <button onClick={handleIncrease} className='bg-green-500 py-2 px-4 text-white mr-4'>Increment</button>
      <button onClick={handleDecrese} className='bg-red-500 py-2 px-4 text-white'>Decrement</button>
    </div>
  )
}

export default UseState