import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AboutPage() {
   const navigate = useNavigate()
  return (
  <>
    <div>AboutPage</div>
    <p>&nbsp;</p>
        <button className='bg-slate-400 py-2 px-3' onClick={()=>{
            navigate('/login')
        }}>
            {/* <Link to="/login">Login</Link> */}
            Login
        </button>
    </>
  )
}

export default AboutPage