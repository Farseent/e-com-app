import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getAllProduct } from "../../api/productApi";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { addToCart } = useCart();  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProduct();
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products: ", error);
        setError("Error fetching product details");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Products</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white bg-opacity-95 rounded-lg shadow-lg p-4 relative transform transition duration-300 hover:shadow-2xl hover:scale-105"
            >
              {/* Product Image */}
              <Link
                to={`/product-details/${product.id}`}
                className="block group"
                aria-label={`View details of ${product.name}`}
              >
                <img
                  src={product.image || "placeholder.jpg"}
                  alt={product.name}
                  className="rounded-t-lg w-full h-48 object-contain transition duration-300 group-hover:opacity-90"
                />
              </Link>

              {/* Product Details */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 transition">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">₹{product.price}</p>
                <p className="text-gray-500  truncate">{product.description}</p>

                {/* Add to Cart Button */}
                <div className="mt-4 flex justify-between items-center">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                      // alert(`Added ${product.name} to the cart!`);
                    }}
                  >
                    Add to Cart
                  </button>

                  {/* Quick View Button */}
                  <button
                    className="text-blue-600 hover:text-blue-700 text-sm underline"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/product-details/${product.id}`);
                    }}
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg text-center col-span-4">
            No products available
          </p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Home;
