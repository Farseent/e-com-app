import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  // Fetch products from db.json
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">All Products</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Products List */}
        <div className="flex flex-col gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex items-center"
              >
                {/* Product Image */}
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-contain rounded-lg mr-4"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg mr-4">
                    <span className="text-gray-600 text-sm">No Image</span>
                  </div>
                )}

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {product.name}
                  </h3>
                  <p className="text-gray-500">₹{product.price}</p>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
                  onClick={() =>
                    alert(`Added ${product.name} to the cart!`)
                  }
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg text-center">
              No products available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
