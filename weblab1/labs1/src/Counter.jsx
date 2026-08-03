import React from 'react'
import { useState } from 'react'

const Counter = () => {
    let [count, setCount]=useState(0);
  return (
    <div>
        <h1>Counter With Limit</h1>
        <h3>{count}</h3>
        <button onClick={()=>{if(count>0){setCount(count-1)} else{alert("Limit reached")}}}>-</button>
        <button onClick={()=>{if(count<10){setCount(count+1)} else{alert("Limit reached")}}}>+</button>
    </div>
  )
}

export default Counter