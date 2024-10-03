import React from 'react'
import ChildComponents from '../COMPONENTS/ChildComponents'
import { useState } from 'react'
import { useCallback } from 'react'

const Memo = () => {

    const [add , setAdd] = useState(0)

    const [count , setCount] = useState(0)

    const NewUpdate = useCallback(function update(){
        setAdd(add => add + 1);
    },[add])

  return (
    <div className='h-svh bg-black text-white flex flex-col justify-center items-center'>
      {add} -
      {count}
      <div className='*:border *:border-white mt-3 *:px-3flex gap-3 *:rounded'>
        <button onClick={() =>setCount((count) => count + 1)}>Counter</button>
        <ChildComponents add={NewUpdate} />
      </div>
    </div>
  )
}

export default Memo
