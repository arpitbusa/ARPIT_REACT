import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';


const Navbar = () => {

    const cart_data_length = useSelector(state => state.cart)
    const wish_data_length = useSelector(state => state.wish)

    return (
        <>
        <div className='bg-slate-200 flex justify-around p-4 items-center'>
            <div>
                <img src="https://redux.js.org/img/redux.svg" alt="" className='h-20 w-20' />
            </div>

            <div>
                <nav className='flex gap-20'>
                    <ul className='flex gap-8'>
                        <li><NavLink to='/' >Home</NavLink></li>
                        <li><NavLink to='/Shop'>Shop</NavLink></li>
                        <li><NavLink to='/Profile'>Contact Us</NavLink></li>
                        <li><NavLink to='/Buy'>Buy</NavLink></li>
                    </ul>

                    <ul className='flex items-center gap-4'>
                        <li><NavLink to='/cart' className='flex relative text-xl'>
                            <FaShoppingCart />
                            <span className='absolute top-[-10px] right-[-8px] text-[10px] h-4 w-4 rounded-full items-center flex justify-center bg-red-500 text-white'>
                                {
                                    cart_data_length.length
                                }
                            </span>
                        </NavLink></li>

                        <li><NavLink to='/wishlist' className='flex relative text-xl'>
                            <FaHeart />
                            <span className='absolute top-[-5px] right-[-4px] text-[10px] h-3 w-3 rounded-full items-center flex justify-center bg-red-500 text-white ring-white '>
                                {
                                    wish_data_length
                                }
                            </span>
                        </NavLink></li>
                    </ul>

                    <ul className='flex gap-3'>
                        <li><NavLink to='/signup'>SignUp</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                    </ul>
                </nav>
            </div>

        </div>
        <Outlet/>
        </>
    )
}

export default Navbar