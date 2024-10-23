import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/HomePage/Home.jsx'
import Support from './Pages/Support/Support.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'
import User from './Pages/Users/User.jsx'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/support' element={<Support/>} />
        <Route path='/users' element={<User/>}>
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
        </Route>
        <Route path='/users/profile' element={<Profile/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
