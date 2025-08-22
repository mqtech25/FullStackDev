import React, { useState } from 'react'
import useCounter from './useCounter'

export const CustomHook = () => {
   const {count,increment,decrement,rest} =useCounter(10);
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center   bg-slate-900 text-white'>
         <h1 className='text-center font-bold text-3xl my-3'>Counter {count} </h1>
        <div className='text-center font-bold text-3xl my-3'>
        <button className='bg-green-600  hover:bg-green-500 text-xl text-white py-2 px-4 cursor-pointer' onClick={increment}>+</button>
        <button  className='bg-red-600 hover:bg-red-500 text-xl text-white py-2 px-4 cursor-pointer' onClick={decrement}>-</button>
        </div>
        <div className='text-center font-bold text-3xl my-3'>
        <button className='bg-slate-600  hover:bg-slate-500 text-xl text-white py-2 px-4 cursor-pointer' onClick={rest}>Rest</button> 
        </div>
    </div>
  )
}
