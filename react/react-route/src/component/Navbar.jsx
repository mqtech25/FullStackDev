import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <ul className='my-5 bg-white flex gap-20 flex-wrap justify-center max-w-md mx-auto text-black'>
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/about'>About</Link>
        </li>
    </ul>
    </>
  )
}

export default Navbar