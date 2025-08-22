
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import HomPage from './component/HomPage'
import AboutPage from './component/AboutPage'
import Login from './component/Login'

function App() {
  return (
    <div className="w-full h-screen bg-slate-900 text-center  p-5 text-center flex-wrap text-white">
        <BrowserRouter>
           <Navbar/>
          <Routes>
            <Route path='/' element={<HomPage/>}></Route>
            <Route path='/about' element={<AboutPage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App