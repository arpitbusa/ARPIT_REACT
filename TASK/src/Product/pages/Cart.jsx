import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cart_to_wishlist, empty_cart, remove_to_cart } from "../../Redux/Action";

const Cart = () => {

    const [quantity, setQuantity] = useState(1)

    const cart_data = useSelector((state) => state.cart);
    console.log("cart data ", cart_data);

    const empty_data_list = () => {
        dispatch(empty_cart())
    }

    const wishlist_data = useSelector((state) => state.wishlist);
    console.log('cart to wishlist ', wishlist_data);


    const calculateTotal = () =>

        cart_data.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);



    const dispatch = useDispatch()
    return (
        <div className="p-6 h-screen">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {
                cart_data.length == 0 ? (
                    <button onClick={() => empty_data_list()} className={`mt-4 text-white px-6 py-2 rounded bg-red-400`} disabled>
                        Empty Cart
                    </button>
                ) : (
                    <button onClick={() => empty_data_list()} className={`mt-4 text-white px-6 py-2 rounded  bg-green-700`}>
                        Empty Cart
                    </button>
                )
            }

            {cart_data.length > 0 ? (
                <div>
                    <div className="space-y-4">
                        {cart_data.map((item) => (
                            <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">{item.price}</p>
                                </div>

                                <div className='  '>
                                    <p className="font-semibold text-sm ">Quantity : </p>
                                    <div className='flex *:py-2 *:px-4 bg-slate-200  items-center  my-4'>
                                        <p className='hover:text-[red] text-2xl cursor-pointer ' onClick={() => {
                                            if (quantity > 1)
                                                setQuantity(quantity - 1)
                                        }} >  &#8722; </p>
                                        <p className='text-md'>{quantity}</p>
                                        <p className='hover:text-[red] text-2xl cursor-pointer ' onClick={() => setQuantity(quantity + 1)}> &#43; </p>
                                    </div>
                                </div>
                                <button onClick={() => dispatch(cart_to_wishlist(item))} className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                                    Cart to wishlist
                                </button>
                                <button onClick={() => dispatch(remove_to_cart(item))} className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-right">

                        <div>
                            <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
                            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                                <NavLink to='/buy'>
                                    Proceed to Buy
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
               
                    <p className="flex justify-center items-center text-gray-800 text-5xl h-1/2 ">Your cart is empty!</p>
                
            )}
        </div>
    );
};

export default Cart;