import React from "react";
import Navbar from "../Components/Navbar";
import {products} from "../../Redux/Data.json"

// const products = [
//   { id: 1, name: "Shoes VIR", price: "$20", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/c/n/h/10-126-grey-10-winprice-grey-original-imagrmcyhvmzxhvv.jpeg?q=90&crop=false" },
//   { id: 2, name: "Shoes VIR", price: "$30", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/n/k/3/7-vir-ezdezario-grey-original-imagqjhugthkmygb.jpeg?q=90&crop=false" },
//   { id: 3, name: "Shoes ATP", price: "$40", image: "https://rukminim2.flixcart.com/image/850/1250/xif0q/shoe/d/l/j/7-b201-kardam-sons-black-original-imagygdknhbjwsah.jpeg?q=20&crop=false" },
//   { id: 4, name: "3D Camera", price: "$50", image: "https://www.justcanon.in/cdn/shop/products/EOSR7wRF-S18-150mmf4.5-6.3ISSSTMFront.jpg?v=1659021305" },
//   { id: 5, name: "Wireless Speaker", price: "$60", image: "https://avstore.in/cdn/shop/products/AVStore-Denon-Home-150-Black-Back.jpg?v=1634724487&width=2000p" },
//   { id: 6, name: "Canon Camera", price: "$70", image: "https://media.the-digital-picture.com/Images/Other/Tamron-150-500mm-f-5-6.7-Di-III-VXD-Lens/Tamron-150-500mm-f-5-6.7-Di-III-VXD-Lens-Extended-Comparison.webp" },
//   { id: 7, name: "Cooler", price: "$80", image: "https://www.novamaxindia.com/public/uploads/all/rtw95I53clnKwl98rlvHPGvbZ4TUAH2gDbvIq0aT.jpg" },
//   { id: 8, name: "Bags", price: "$90", image: "https://cdn.lowepro.com/media/catalog/product/cache/03fd8892b024dd7e7d63ccf8cf919d8c/c/a/camera-backpacks-tahoebp-150-family-2-sq-lp36892-config.jpg" },
//   { id: 9, name: "ToolsVilla", price: "$100", image: "https://s3.toolsvilla.com/products-heavyduty2500watthighpressurewasher/1709985310002/1709985398393-watmrkA.webp" },
//   { id: 10, name: "Mixer", price: "$110", image: "https://vasanthandco.in/images/productimages/15__product__Mixer%20Grinder__Preethi%20BLUE%20LEAF%20GOLD%20MG-150%203%20JAR%20750%20Watt%20Mixer%20Grinder.jpeg" },
// ];

const Home = () => {
return (
  <>
  <Navbar/>
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-8">Welcome to Our Store</h1>

      {/* Product Grid */}
      <h2 className="text-xl font-semibold mb-4">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img src={product.thumbnail} alt={product.name} className="w-full h-50 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-gray-800 text-white p-6">
        <div className="text-center">
          <p>&copy; 2024 Your Store. All rights reserved.</p>
          <p>Follow us on:
            <a href="#" className="text-blue-400 ml-2">Facebook</a>,
            <a href="#" className="text-blue-400 ml-2">Twitter</a>,
            <a href="#" className="text-blue-400 ml-2">Instagram</a>
          </p>
        </div>
      </footer>
    </div>
 </>
  );
};

export default Home;
