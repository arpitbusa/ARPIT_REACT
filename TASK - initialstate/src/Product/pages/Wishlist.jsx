import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove_to_wishlist } from "../../Redux/Action";
import Navbar from "../Components/Navbar";


const Wishlist = () => {

    const wishlist_data1 = useSelector((state) => state.CartData)
    console.log("add to wishlist data1", wishlist_data1);

    const wishlist_data2 = useSelector((state) => state.CartWish)
    console.log("add to wishlist data2", wishlist_data2);

    const data = wishlist_data1.concat(wishlist_data2)

    console.log('data ', data);

    const dispatch = useDispatch()
    return (
        <>
        <Navbar/>
        <div className="p-6 h-screen ">
            <h1 className="text-2xl font-bold mb-4">Wishlist</h1>

            <div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist_data1.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                        >
                            <img src={item.thumbnail} alt={item.name} className="w-full h-50 object-cover rounded" />
                            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                            <p className="text-gray-600">{item.price}</p>
                            <button onClick={() => dispatch(remove_to_wishlist(item))} className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                Remove from Wishlist
                            </button>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist_data2.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                        >
                            <img src={item.thumbnail} alt={item.name} className="w-full h-50 object-cover rounded" />
                            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                            <p className="text-gray-600">{item.price}</p>
                            <button onClick={() => dispatch(remove_to_wishlist(item))} className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                Remove from Wishlist
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
    );
};

export default Wishlist;