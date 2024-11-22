import React from 'react';

const products = [
    {
        id: 1,
        name: "Organic Quinoa",
        price: "$9.99",
        image: "https://example.com/quinoa.jpg",
    },
    {
        id: 2,
        name: "Almond Butter",
        price: "$14.99",
        image: "https://example.com/almond-butter.jpg",
    },
    {
        id: 3,
        name: "Coconut Oil",
        price: "$12.99",
        image: "https://example.com/coconut-oil.jpg",
    },
    {
        id: 4,
        name: "Chia Seeds",
        price: "$5.99",
        image: "https://example.com/chia-seeds.jpg",
    },
    {
        id: 5,
        name: "Organic Honey",
        price: "$8.99",
        image: "https://example.com/organic-honey.jpg",
    },
    {
        id: 6,
        name: "Greek Yogurt",
        price: "$4.49",
        image: "https://example.com/greek-yogurt.jpg",
    },
    {
        id: 7,
        name: "Whole Wheat Pasta",
        price: "$2.99",
        image: "https://example.com/whole-wheat-pasta.jpg",
    },
    {
        id: 8,
        name: "Dark Chocolate Bar",
        price: "$3.99",
        image: "https://example.com/dark-chocolate.jpg",
    },
    {
        id: 9,
        name: "Herbal Tea",
        price: "$7.99",
        image: "https://example.com/herbal-tea.jpg",
    },
    {
        id: 10,
        name: "Olive Oil",
        price: "$11.99",
        image: "https://example.com/olive-oil.jpg",
    },
    {
        id: 11,
        name: "Vegan Protein Powder",
        price: "$29.99",
        image: "https://example.com/protein-powder.jpg",
    },
    {
        id: 12,
        name: "Nut Mix",
        price: "$6.99",
        image: "https://example.com/nut-mix.jpg",
    },
    {
        id: 13,
        name: "Rice Cakes",
        price: "$2.49",
        image: "https://example.com/rice-cakes.jpg",
    },
    {
        id: 14,
        name: "Granola Bars",
        price: "$3.49",
        image: "https://example.com/granola-bars.jpg",
    },
    {
        id: 15,
        name: "Salsa",
        price: "$4.99",
        image: "https://example.com/salsa.jpg",
    },
    {
        id: 16,
        name: "Nut Butter",
        price: "$5.99",
        image: "https://example.com/nut-butter.jpg",
    },
    {
        id: 17,
        name: "Frozen Berries",
        price: "$9.99",
        image: "https://example.com/frozen-berries.jpg",
    },
    {
        id: 18,
        name: "Veggie Chips",
        price: "$3.99",
        image: "https://example.com/veggie-chips.jpg",
    },
    {
        id: 19,
        name: "Apple Cider Vinegar",
        price: "$4.49",
        image: "https://example.com/apple-cider-vinegar.jpg",
    },
    {
        id: 20,
        name: "Spices Set",
        price: "$19.99",
        image: "https://example.com/spices-set.jpg",
    },
];

const Shop = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4 mb-10">
                <h1 className="text-4xl font-bold text-center mb-8">Shop Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-56 object-cover mb-4 rounded-lg"
                            />
                            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-4">{product.price}</p>
                            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
                        <div>
                            <h3 className="text-lg font-bold">ShopMate</h3>
                            <p className="mt-4 text-gray-400">Your go-to online store for fashion, electronics, and home essentials.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Quick Links</h3>
                            <ul className="mt-4 space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Contact Us</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Terms & Conditions</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Customer Service</h3>
                            <ul className="mt-4 space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-indigo-400">Help & FAQs</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Returns</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Shipping Info</a></li>
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
                        <p>&copy; 2024 ShopMate. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Shop;
