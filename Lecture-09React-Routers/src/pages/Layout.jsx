import React from 'react'
import About from './Aboutus'
import Cart from './Cart'
import Contact from './Contactus'
import Error from './Error'
import Home from './Home'
import Login from './Login'
import Shop from './Shop'
import Navbar from '../components/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/Contact'element={<Contact/>}></Route>
        <Route path='/About'element={<About/>}></Route>
        <Route path='/Cart'element={<Cart/>}></Route>
        <Route path='/Login'element={<Login/>}></Route>
        <Route path='/Shop'element={<Shop/>}></Route>
        <Route path='/*'element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout
