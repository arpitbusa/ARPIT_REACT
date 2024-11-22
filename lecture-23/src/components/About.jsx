import React from 'react';

const About = () => {
    return (
        <div>
            <main className="container mx-auto mt-10 px-4">
                <section className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700 mb-4">
                        At Food Haven, we are dedicated to bringing you delicious, fresh, and wholesome meals that nourish your body and soul.
                    </p>
                    <img src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" alt="Delicious food" className="rounded-lg mb-4" />

                    <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                    <ul className="list-disc pl-5 text-gray-700 mb-4">
                        <li>Quality: We source the finest ingredients for every dish.</li>
                        <li>Community: We believe in supporting local farmers and producers.</li>
                        <li>Sustainability: We are committed to eco-friendly practices.</li>
                        <li>Passion: Our love for food drives everything we do.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUpmclZ8pIPdEje6GfssgP15th1mP1al9ZA&s" alt="Our Team" className="rounded-lg mb-4" />
                    <p className="text-gray-700 mb-4">
                        Our team of chefs and food lovers are passionate about creating culinary experiences that you and your family will love.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
                    <p className="text-gray-700 mb-4">
                        We invite you to explore our menu and discover the flavors that make us a favorite in the community. Together, let's celebrate good food!
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
                        <div>
                            <h3 className="text-lg font-bold">Food Haven</h3>
                            <p className="mt-4 text-gray-400">Your go-to destination for fresh, delicious meals.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Quick Links</h3>
                            <ul className="mt-4 space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Contact Us</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Menu</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Catering Services</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Customer Service</h3>
                            <ul className="mt-4 space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-indigo-400">Help & FAQs</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Returns</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Delivery Info</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Order Tracking</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Follow Us</h3>
                            <ul className="mt-4 space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-indigo-400">Facebook</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Instagram</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Twitter</a></li>
                                <li><a href="#" className="hover:text-indigo-400">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-gray-400">
                        <p>&copy; 2024 Food Haven. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default About;
