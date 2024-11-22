import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {

    const { user } = useAuth0()
    console.log(user);
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Profile Header Section */}
            <header className="bg-red-600 text-white py-16">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold">My Profile</h1>
                    <p className="mt-4 text-lg">Manage your personal information and preferences</p>
                </div>
            </header>

            {/* Profile Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">Profile Information</h2>

                        {/* Avatar Section */}
                        <div className="text-center mb-8">
                            <img
                                className="w-32 h-32 rounded-full mx-auto border-4 border-red-600"
                                src={user.picture}
                                alt="User Avatar"
                            />
                            {/* <button className="mt-4 px-4 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-300">
                                Change Avatar
                            </button> */}
                        </div>

                        {/* User Information Form */}
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Full Name */}
                                <div>
                                    <p className="block text-sm font-bold mb-2" >
                                        Name
                                    </p>
                                    <p>
                                        {user.name}
                                    </p>

                                </div>

                                {/* Email Address */}
                                <div>
                                    <p className="block text-sm font-bold mb-2" >
                                        Email
                                    </p>
                                    <p>
                                        {user.email}
                                    </p>
                                </div>
                            </div>

                            {/* Bio Section */}
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2" htmlFor="bio">
                                    Bio
                                </label>
                                <textarea
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 outline-none"
                                    id="bio"
                                    rows="4"
                                    placeholder="Tell us about yourself"
                                    defaultValue="I'm a food lover and a veggie enthusiast."
                                ></textarea>
                            </div>

                            {/* Save Changes Button */}
                            {/* <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-300"
                                >
                                    Save Changes
                                </button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-red-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Veggie Foods. All Rights Reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default Profile