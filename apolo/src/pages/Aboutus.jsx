import React from 'react'

const AboutUs = () => {
  return (


    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">About TechNest</h1>
          <p className="mt-4 text-lg">Your destination for the latest gadgets since 1999</p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img src="https://www.shutterstock.com/image-photo/our-story-phrase-written-vintage-260nw-1573061656.jpg" alt="Our Story" className="w-full md:w-1/2 rounded-lg shadow-lg mb-8 md:mb-0" />
            <div className="md:ml-10 text-center md:text-left">
              <p className="text-lg text-gray-700 mb-6">
                TechNest started as a small electronics booth, providing access to the latest gadgets. Over the years, we've evolved into a trusted chain known for quality products and exceptional customer service.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is to deliver cutting-edge technology to everyone. Whether you're upgrading your setup or looking for the perfect gift, TechNest is here to help!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Signature Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Product Item 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://cdn.mos.cms.futurecdn.net/Ajc3ezCTN4FGz2vF4LpQn9.jpg" alt="Laptop" className="w-full h-96 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">High-Performance Laptop</h3>
                <p className="text-gray-600 mb-2">$999.99</p>
                <p className="text-gray-700">Equipped with the latest processor, stunning display, and lightning-fast SSD storage, perfect for work or play.</p>
              </div>
            </div>

            {/* Product Item 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://thegreytechnologies.in/cdn/shop/products/mini-smartphone-android-7_1000x.jpg?v=1701107216" alt="Smartphone" className="w-full h-96 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold">Latest Smartphone</h3>
                <p className="text-gray-600 mb-2">$799.99</p>
                <p className="text-gray-700">Features a sleek design, advanced camera technology, and top-of-the-line performance for all your needs.</p>
              </div>
            </div>

            {/* Product Item 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc-headphonearn/product_silo_image/AEM_qc-headphonearn_PDP_GALLERY_CYPRESS-GREEN-6.png/jcr:content/renditions/cq5dam.web.1920.1920.png" alt="Headphones" className="w-full h-96 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Noise-Canceling Headphones</h3>
                <p className="text-gray-600 mb-2">$299.99</p>
                <p className="text-gray-700">Enjoy immersive sound quality and superior comfort, perfect for music lovers and travelers alike.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 TechNest. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )

}

export default AboutUs