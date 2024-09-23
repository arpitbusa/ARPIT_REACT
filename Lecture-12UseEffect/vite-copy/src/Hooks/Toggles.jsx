import React from 'react'
import { useEffect } from 'react'

const Toggles = ({Toggle,handleToggle}) => {

    useEffect(() => {
        console.log('this is React Hooks');

    }, [Toggle])

  return (
    <div>
      <button onClick={handleToggle}>Toggle Me</button>

      {
        Toggle ? <div>This is React Element</div> :null
      }
    </div>
  )
}

export default Toggles
