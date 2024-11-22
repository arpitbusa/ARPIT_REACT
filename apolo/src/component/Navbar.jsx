import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
        <div className='bg-slate-200 flex justify-around p-2 items-center'>
            <div>
                <img src="https://i.pinimg.com/736x/4d/93/19/4d93191e73132d699835167521c5edad.jpg" alt="" className='h-20 rounded-full shadow-black shadow-2xl' />
            </div>

            <div>
                <nav>
                    <ul className='flex gap-8'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/cart'>Cart</NavLink></li>
                        <li><NavLink to='/shop'>Shop</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        {
                            isAuthenticated ? (
                                <div className="flex gap-5">
                                    <li>
                                        <NavLink to='/profile'>
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink>
                                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                                        </NavLink>
                                    </li>

                                </div>
                            ) : (

                                <li><NavLink to='/login' onClick={() => loginWithRedirect()}>Login</NavLink></li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar