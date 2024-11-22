import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="bg-red-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Get In Touch</h1>
          <p className="mt-4 text-lg">We'd love to hear from you. Reach out to us for any queries or feedback!</p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="name">Full Name</label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
                  id="message"
                  rows="6"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-green-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-700">123 Veggie Lane, Food City, Country</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-700">+123 456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-700">support@veggiefoods.com</p>
            </div>
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

export default Contact