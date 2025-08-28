import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <header className='bg-neutral-100/50 shadow-md'>
        <div className="container mx-auto">
            <nav className='flex flex-wrap justify-between py-4'>
            <p className='text-2xl font-medium'><NavLink to='/' className='hover:text-black transition-all'>Viral Blogs</NavLink></p>
            <ul className='flex flex-wrap gap-5'>
                <li>
                <NavLink to='/' className={({isActive})=>(isActive ?"text-blue-600 ":"hover:text-blue-300 transition-all text-black")} >Home</NavLink>
                </li>
                <li>
                <NavLink to='/create-blog' className={({isActive})=>(isActive?"text-blue-600":"hover:text-blue-300 transition-all text-dark")}>Create Blog</NavLink>
                </li>
                <li>
                <NavLink to='/profile' className={({isActive})=>(isActive?"text-blue-600":"hover:text-blue-300 transition-all text-dark")}>Profile</NavLink>
                </li>
            </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar