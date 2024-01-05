import React, { useEffect } from 'react'
import { useState } from 'react'



const User = (props) => {
  const [count, setCount] = useState(0)

  useEffect(()=>{},[])

  return (
    <div className='user-card'>
      <h2>Count: {count}</h2>
        <h2>Name: {props.name}</h2>
        <h2>Location: Chennai</h2>
        <h4>Contact: injamamulhak080404@gmail.com</h4>
    </div>
  )
}

export default User