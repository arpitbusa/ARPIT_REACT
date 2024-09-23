import React from 'react'
import { useEffect, useState } from 'react'

const UseEffectHooks = () => {
    const [count, setcount] = useState(0)
    
    useEffect(() => {
        console.log('this is React Hooks');

    }, [count])

    return (
        <div>
            <h1 className='heading'>This is react useEffect Hook</h1>
            <p>Count : {count}</p>
            <button onClick={() => setcount(count + 1)}>click</button>
        </div>
    )
}

export default UseEffectHooks
