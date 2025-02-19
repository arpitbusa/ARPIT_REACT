import React from 'react'
import Reducer from './Reducer'
import { useReducer } from 'react'

const UseReducer = () => {
    const [state,dispatch] = useReducer(Reducer , {age:20 , count:20})
    console.log('useReducer', state.age);
    
  return (
    <div>
      <h1>This is Reducer Hook In React</h1>
      <p>Age: {state.age}</p>
      <p>count: {state.count}</p>
      <button onClick={()=>dispatch('DecrementAge')}>Age Decrement</button>
      <button onClick={()=>dispatch('IncrementAge')}>Age Increment</button> <br />
      <button onClick={()=>dispatch('DecrementCount')}>Count Decrement</button>
      <button onClick={()=>dispatch('IncrementCount')}>Count Increment</button>
    </div>
  )
}

export default UseReducer
