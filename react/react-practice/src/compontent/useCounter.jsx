import React, { useState } from 'react'

function useCounter(initalValue = 0) {
    const [count,setCount]=useState(initalValue);

    const increment =()=>  setCount(count + 1)
    const decrement =()=>  setCount(count>initalValue? (count - 1): (initalValue))
    const rest = ()=> setCount(initalValue)
  return  {count,increment,decrement,rest}
}

export default useCounter