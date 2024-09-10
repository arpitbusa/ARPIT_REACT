import React from 'react'
import { useState } from 'react'

const Usestate2 = () => {

    const [count , setCount] = useState(0)

    const handleIncrease = () => {
        console.log('Call Increment');
      return setTimeout(() => setCount(count + 1) ,1000)    
    }

    const handleDecrese = () => {
        console.log('Call Decrement');
      return setTimeout(() => setCount(count - 1) ,1000)  
    }

  return (
    <div className='text-center'>
        <p className='bg-red-200 py-2 px-4 mb-4 text-black font-bold'>Count = {count}</p>
      <button onClick={handleIncrease} className='bg-green-500 py-2 px-4 text-white mr-4'>Increment</button>
      <button onClick={handleDecrese} className='bg-red-500 py-2 px-4 text-white mr-4'>Decrement</button>
    </div>
  )
}

export default Usestate2