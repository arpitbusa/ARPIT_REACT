import React from "react";
import { NavLink } from "react-router-dom";

const Buy = () => {
    return (
        <div className="p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
            <p className="text-lg">Thank you for your purchase!</p>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                <NavLink to='/'>
                    Back to Home
                </NavLink>

            </button>





            <div className="flex justify-center items-center min-h-screen bg-gray-50 py-8">
                <div className="max-w-xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        className="w-full h-64 object-cover"
                        src="https://via.placeholder.com/600x400"
                        alt="Product"
                    />
                    <div className="p-6">
                        <h2 className="text-3xl font-bold text-gray-800">Amazing Product</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            This is an amazing product that you will love. It's made of high-quality materials and perfect for your needs.
                        </p>
                        <p className="mt-4 text-xl font-semibold text-gray-900">$49.99</p>
                        <button className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buy;