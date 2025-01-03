import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useSelector , useDispatch } from "react-redux"
import { add_to_cart } from "../../Redux/Action";
// import {products} from "../../Redux/Data.json"

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data.products && data.products.length) setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= products.length / 10 &&
      pageNumber !== page
    )
      setPage(pageNumber);    
  };

  return (
    <>
    <Navbar/>
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-8">Welcome to Our Store</h1>
      <h2 className="text-xl font-semibold mb-4">All Products</h2>
      {products.length && (
        <ol className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.slice(page * 10 - 10, page * 10).map((product) => (
            <li key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition items-center">
              <img src={product.thumbnail} alt={product.title} />
              <h4>{product.title}</h4>
              <h4>{product.price}</h4>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => dispatch(add_to_cart(products))}>Add to Cart</button>
            </li>
          ))}
        </ol>
      )}

      {products.length > 0 && (
        <section className="flex items-center justify-center text-2xl gap-2">
          <span
            onClick={() => handlePageChange(page - 1)}
          >
            ⬅
          </span>
          {[...Array(Math.floor(products.length / 10))].map((_, i) => (
            <span
              className={`page__number ${
                page === i + 1 ? "selected__page__number" : ""
              }`}
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </span>
          ))}
          <span
            onClick={() => handlePageChange(page + 1)}
          >
            ➡
          </span>
        </section>
      )}
    </div>
    </>
  );
}