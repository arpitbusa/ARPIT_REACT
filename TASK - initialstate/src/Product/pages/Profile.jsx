import React from 'react';

const Profile = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 " >
            <div className="bg-white p-8 rounded-lg shadow-md w-96" >
                <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            required
                            rows="4"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;