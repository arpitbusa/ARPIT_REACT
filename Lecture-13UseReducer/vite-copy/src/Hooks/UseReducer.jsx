import React from 'react'
import Reducer from './Reducer'
import { useReducer } from 'react'

const UseReducer = () => {
    const [state,dispatch] = useReducer(Reducer , {age:40 , count:40})
    console.log('useReducer', state.age);
    
  return (
    <div>
      <h1>This is Reducer Hook In React</h1>
      <p>Age: {state.age}</p>
      <p>count: {state.count}</p>
      <button onClick={()=>dispatch('IncrementAge')}>Age Increment</button>
      <button onClick={()=>dispatch('DecrementAge')}>Age Increment</button>
      <button onClick={()=>dispatch('IncrementCount')}>Count Increment</button>
      <button onClick={()=>dispatch('DecrementCount')}>Count Increment</button>
    </div>
  )
}

export default UseReducer
