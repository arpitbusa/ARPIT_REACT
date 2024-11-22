import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-blue-50 py-16">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="md:w-1/2 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Shop Smart with Flipkart</h1>
                        <p className="text-gray-600 text-lg">Explore a wide range of products from groceries to gourmet foods.</p>
                        <a href="#" className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600">Start Shopping</a>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img 
                            src="https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg" 
                            alt="Shopping Banner" 
                            className="rounded-lg shadow-md object-cover" 
                        />
                    </div>
                </div>
            </div>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop by Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Category Cards */}
                        {[
                            {
                                title: "Fruits",
                                img: "https://example.com/fruits.jpg",
                                link: "#"
                            },
                            {
                                title: "Vegetables",
                                img: "https://example.com/vegetables.jpg",
                                link: "#"
                            },
                            {
                                title: "Dairy Products",
                                img: "https://example.com/dairy.jpg",
                                link: "#"
                            },
                            {
                                title: "Snacks",
                                img: "https://example.com/snacks.jpg",
                                link: "#"
                            }
                        ].map((category, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                                <img className='w-full h-80 rounded-md' src={category.img} alt={category.title} />
                                <h3 className="text-lg font-semibold text-gray-700">{category.title}</h3>
                                <a href={category.link} className="block mt-2 bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600">Shop Now</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
                        <div>
                            <h3 className="text-lg font-bold">Flipkart</h3>
                            <p className="mt-4 text-gray-400">Your one-stop shop for all your needs.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Quick Links</h3>
                            <ul className="mt-4 space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Customer Service</h3>
                            <ul className="mt-4 space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-yellow-400">Help & FAQs</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Returns</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Shipping Info</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Order Tracking</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Follow Us</h3>
                            <ul className="mt-4 space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-yellow-400">Facebook</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Instagram</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Twitter</a></li>
                                <li><a href="#" className="hover:text-yellow-400">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-400">
                        <p>&copy; 2024 Flipkart. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
