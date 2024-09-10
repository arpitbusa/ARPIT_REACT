import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag2Line } from "react-icons/ri";


const Navbar = () => {
  return (
    <div>
      <div className='flex items-center justify-around bg-white'>
        <div>
            <img className='h-16' src="../assets/asset 1.svg" alt="" />
        </div>
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/"Home></NavLink></li>
                    <li><NavLink to="/shop"Shop></NavLink></li>
                    <li><NavLink to="/pages"Pages></NavLink></li>
                    <li><NavLink to="/product"Product></NavLink></li>
                    <li><NavLink to="/blog"Blog></NavLink></li>
                    <CiSearch />
                    <CiHeart />
                    <RiShoppingBag2Line />
                </ul 
                
                
                >
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
