import React from 'react';

const Home = () => {
    return (
        <div className=''>
            <section id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/showcase-electronic-items-black-background_893571-15169.jpg')` }}>
                <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                    <h1 className="text-5xl text-white font-bold mb-4">Latest Electronics, Delivered Fast!</h1>
                    <p className="text-lg text-white mb-6">Get your favorite gadgets delivered to your doorstep in no time.</p>
                    <a href="#menu" className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-yellow-600">Shop Now</a>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Electronics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Menu Item 1 */}
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src="https://thegreytechnologies.in/cdn/shop/products/mini-smartphone-android-7_1000x.jpg?v=1701107216" alt="Smartphone" className="w-full h-96 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Smartphone</h3>
                                <p className="text-gray-600">$699.99</p>
                                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Add to Cart</button>
                            </div>
                        </div>
                        {/* Menu Item 2 */}
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src="https://cdn.mos.cms.futurecdn.net/Ajc3ezCTN4FGz2vF4LpQn9.jpg" alt="Laptop" className="w-full h-96 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Laptop</h3>
                                <p className="text-gray-600">$999.99</p>
                                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Add to Cart</button>
                            </div>
                        </div>
                        {/* Menu Item 3 */}
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src="https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc-headphonearn/product_silo_image/AEM_qc-headphonearn_PDP_GALLERY_CYPRESS-GREEN-6.png/jcr:content/renditions/cq5dam.web.1920.1920.png" alt="Headphones" className="w-full h-96 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Wireless Headphones</h3>
                                <p className="text-gray-600">$199.99</p>
                                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-red-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 ElectroShop. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;