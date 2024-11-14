import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import Navbar from './components/navbar'


const App = () => {
  return (
    <div classsName = 'mx-4sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Doctors' element={<Doctors/>}/>  
        <Route path='/Login' element={<Login/>}/>  
      </Routes>
      
     
      
    </div>
  )  
}

export default App
