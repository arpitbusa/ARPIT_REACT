import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Wishlist from './Wishlist'
import Profile from './ContactUs'
import Login from './Login'
import Error from './Error'
import SignUp from './SignUp'
import Buy from './Buy'

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/SignUp' element={<SignUp/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/wishlist' element={<Wishlist/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/buy' element={<Buy/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout