import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    if (data.products && data.products.length) setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

// event handler for page change on click
  const handlePageChange = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= products.length / 10 &&
      pageNumber !== page
    )
      setPage(pageNumber);    
  };

  return (
    <div className="App">
      <h1>All Products</h1>
      {products.length && (
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(page * 10 - 10, page * 10).map((product) => (
            <li key={product.id} className="product">
              <img src={product.thumbnail} alt={product.title} />
              <h4>{product.title}</h4>
            </li>
          ))}
        </ol>
      )}

      {products.length > 0 && (
        <section className="pagination">
          <span
            onClick={() => handlePageChange(page - 1)}
            className={`arrow ${page === 1 ? "pagination__disabled" : ""}`}
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
            className={`arrow ${
              page === Math.floor(products.length / 10)
                ? "pagination__disabled"
                : ""
            }`}
          >
            ➡
          </span>
        </section>
      )}
    </div>
  );
}
