import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_choco , buy_cake} from './Redux/Action'

const ReduxContainer = () => {

    const data1 = useSelector(state => state.chocos.numofchoco)
    const data2 = useSelector(state => state.cakes.numofcake)

    console.log('data 1',data1);
    console.log('data 2',data2);

    const dispatch = useDispatch()

  return (
    <div>
      <h1 className='text-center bg-blue-400 p-2 font-black text-white text-4xl'>This is React Redux</h1>
      <div>
        <span>{data1}</span>
      </div>
      <button onClick={() => dispatch(buy_choco())}>Click Choco</button>
      <div>
       <span>{data2}</span>
      </div>
      <button onClick={() => dispatch(buy_cake())}>Click Cake</button>
    </div>
  )
}

export default ReduxContainer