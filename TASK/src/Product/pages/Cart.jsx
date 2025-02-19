import React, { useState } from "react";
import Navbar from "../Components/Navbar";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cart_to_wishlist, empty_cart, remove_to_cart } from "../../Redux/Action";
import { ToastContainer } from "react-toastify";

const Cart = () => {

    const cart_data = useSelector((state) => state.cart);
    // console.log("cart_data ", cart_data);

    const empty_data_list = () => {
        dispatch(empty_cart())      
    }

    const wishlist_data = useSelector((state) => state.wishlist);
    console.log('cart to wishlist ', wishlist_data);

    const dispatch = useDispatch()
    return (
        <>
        <Navbar/>
        <ToastContainer/>
        <div className="p-6 h-screen">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {
                cart_data.length == 0 ? (
                    <button onClick={() => empty_data_list()} className={`mt-4 mb-4 text-white px-6 py-2 rounded bg-red-400`} disabled>
                        Empty Cart
                    </button>
                ) : (
                    <button onClick={() => empty_data_list()} className={`mt-4 mb-4 text-white px-6 py-2 rounded  bg-green-700`}>
                        Empty Cart
                    </button>
                )
            }

            {cart_data.length > 0 ? (
                <div>
                    <div className="space-y-4">
                        {cart_data.map((product) => (
                            <div key={product.id} className="flex items-center space-x-4 border-b pb-4">
                                <img src={product.thumbnail} alt={product.title} className="w-16 h-16 object-cover rounded" />
                                <div>
                                    <h2 className="text-lg font-semibold">{product.title}</h2>
                                    <p className="text-gray-600">{product.price}</p>
                                </div>

                                <button onClick={() => dispatch(cart_to_wishlist(product))} className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                                    Cart to wishlist
                                </button>
                                <button onClick={() => dispatch(remove_to_cart(product))} className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600">
                                    Remove to cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
               
                    <p className="flex justify-center items-center text-gray-800 text-5xl h-1/2 ">Your cart is empty!</p>
                
            )}
        </div>
    </>
    );
};

export default Cart;