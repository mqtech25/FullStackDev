import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <ul className='my-5 bg-white flex gap-20 flex-wrap justify-center max-w-md mx-auto text-black'>
        <li>
        <NavLink to='/'className={({isActive})=>(isActive ?"text-green-400":"text-black")} >Home</NavLink>
        </li>
        <li>
        <NavLink to='/about'>About</NavLink>
        </li>
    </ul>
    </>
  )
}

export default Navbar