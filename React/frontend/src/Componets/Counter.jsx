import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);

    const [color,setColor]=useState("black")
    useEffect(()=>{
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var RGBColor = "rgb(" + x + "," + y + "," + z + ")"; 
        setColor(RGBColor);
    },[count])
  return (
    <div>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <h1 style={{color}} >Counter:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counter