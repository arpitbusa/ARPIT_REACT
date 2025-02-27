import React from 'react'
import logo from '../assets/logo.png'
// import { NavLink } from 'react-router-dom'
import {NavLink , Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {

const {loginWithRedirect} = useAuth0()

  return (
    <div>
      <div className='flex items-center justify-around bg-gray-500'>
      <div>
        <img className='h-16' src={logo} alt="" />
      </div>
      <div>
        <nav>
            <ul className='flex gap-6'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
                <li><NavLink to="/about">AboutUs</NavLink></li>
                <li><NavLink to="/contact">ContactUs</NavLink></li>
                <li><NavLink to="/login" onClick={() => loginWithRedirect()}>Login</NavLink></li>
            </ul>
        </nav>
      </div>
    </div>
    <Outlet />
    </div>
  )
}

export default Navbar