import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { empty_wishlist , remove_to_wishlist } from "../../Redux/Action";
import Navbar from "../Components/Navbar";


const Wishlist = () => {

    const wishlist_data1 = useSelector((state) => state.wishlist.productWish)
    console.log("productpage : add to wishlist data1", wishlist_data1);

    const wishlist_data2 = useSelector((state) => state.wishlist.cartWish)
    console.log("productpage : add to wishlist data2", wishlist_data2);

    const data = wishlist_data1.concat(wishlist_data2)

    console.log('data ', data);

    const empty_data_list = () => {
        dispatch(empty_wishlist())
    }

    const dispatch = useDispatch()
    return (
        <>
        <Navbar/>
        <div className="p-6 h-screen ">
            <h1 className="text-2xl font-bold mb-4">Wishlist</h1>

            {
                data.length === 0 ? (
                    <div className="h-1/2">
                        <button onClick={() => empty_data_list()} className={`mt-3 bg-red-400 text-white px-4 py-2 rounded`} disabled>
                            Empty Wishlist
                        </button>
                        <div className="h-1/2">
                            <p className="flex justify-center items-center text-gray-800 text-5xl h-1/2 ">Your wishlist is Empty !</p>
                        </div>
                    </div>

                ) : (
                    <div className="my-4">
                        <button onClick={() => empty_data_list()} className={`mt-3 bg-green-700 text-white px-4 py-2 rounded my-4`} >
                            Empty Wishlist
                        </button>

                        <hr />
                    </div>



                )
            }
            <div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist_data1.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                        >
                            <img src={item.thumbnail} alt={item.title} className="w-full h-50 object-cover rounded" />
                            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                            <p className="text-gray-600">{item.price}</p>
                            <button onClick={() => dispatch(remove_to_wishlist(item))} className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                Remove from Wishlist
                            </button>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist_data2.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                        >
                            <img src={product.thumbnail} alt={product.name} className="w-full h-50 object-cover rounded" />
                            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                            <p className="text-gray-600">{product.price}</p>
                            <button onClick={() => dispatch(remove_to_wishlist(product))} className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
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