import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomPage from '../../react-route/src/component/HomPage'
import Login from './pages/Login'
import SingleBlog from './pages/SingleBlog'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import CreateBlog from './pages/CreateBlog'

function App() {
  return (
<>

<BrowserRouter>
    <Routes>
        <Route path='/' element={<HomPage/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/signup' element={<Signup/>}> </Route>
        <Route path='/profile' element={<Profile/>}> </Route>
        <Route path='/single-blog:id' element={<SingleBlog/>}> </Route>
        <Route path='/create-blog' element={<CreateBlog/>}> </Route>
    </Routes>
</BrowserRouter>
</>

  )
}

export default App