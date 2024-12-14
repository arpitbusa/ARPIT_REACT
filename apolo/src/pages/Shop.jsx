import React from 'react'

const Shop = () => {
  const electronicItems = [
    {
      id: 1,
      name: 'High-Performance Laptop',
      description: 'A powerful laptop equipped with the latest processor and graphics card.',
      price: '$999.99',
      img: 'https://www.pc-tablet.co.in/wp-content/uploads/2024/09/Acer-Launches-High-Performance-Aspire-7-Laptop-for-Gaming-and-Productivity-990x664.jpg',
    },
    {
      id: 2,
      name: 'Latest Smartphone',
      description: 'Sleek design with an advanced camera and long-lasting battery.',
      price: '$799.99',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ecF010m_0ikOXEotQjvaGYwtrYkBss573g&s',
    },
    {
      id: 3,
      name: 'Noise-Canceling Headphones',
      description: 'Experience immersive sound quality and superior comfort.',
      price: '$299.99',
      img: 'https://m.media-amazon.com/images/I/51mb-i8N5tL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Stay connected and track your fitness with style.',
      price: '$199.99',
      img: 'https://example.com/smartwatch.jpg',
    },
    {
      id: 5,
      name: '4K Ultra HD TV',
      description: 'Enjoy stunning picture quality and smart features.',
      price: '$599.99',
      img: 'https://example.com/tv.jpg',
    },
    {
      id: 6,
      name: 'Wireless Earbuds',
      description: 'Compact design with excellent sound quality and battery life.',
      price: '$149.99',
      img: 'https://example.com/earbuds.jpg',
    },
    {
      id: 7,
      name: 'Gaming Console',
      description: 'Next-gen gaming experience with stunning graphics and speed.',
      price: '$499.99',
      img: 'https://example.com/gaming-console.jpg',
    },
    {
      id: 8,
      name: 'Portable Bluetooth Speaker',
      description: 'Take your music anywhere with powerful sound and portability.',
      price: '$99.99',
      img: 'https://example.com/bluetooth-speaker.jpg',
    },
    {
      id: 9,
      name: 'Tablet',
      description: 'Versatile device for work and play with a high-resolution display.',
      price: '$399.99',
      img: 'https://example.com/tablet.jpg',
    },
    {
      id: 10,
      name: 'External Hard Drive',
      description: 'Expand your storage with fast data transfer speeds.',
      price: '$89.99',
      img: 'https://example.com/external-hard-drive.jpg',
    },
  ];
  
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Electronic Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {electronicItems.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.price}</p>
                <p className="text-gray-700">{item.description}</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}

export default Shop