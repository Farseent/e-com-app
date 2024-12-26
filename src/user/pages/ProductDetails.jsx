import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getProductbyId } from "../../api/productApi";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductbyId(id); // Use the function from ProductApi.js
        setProduct(response.data); // Set the product data
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center my-10 text-xl text-gray-500">Loading...</p>;
  if (error) return <p className="text-center my-10 text-xl text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {product && (
        <div className="flex flex-col md:flex-row items-center md:space-x-8 bg-white p-6 rounded-lg shadow-xl">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product.image || "https://via.placeholder.com/300"}
              alt={product.name}
              className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
          {/* Product Details */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h1 className="text-4xl font-extrabold text-gray-800">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-2">₹ {product.price}</p>
            <p className="text-gray-500 mt-4 text-base">{product.description}</p>

            <div className="flex items-center mt-6 space-x-4">
              {/* Add to Cart Button */}
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => {
                  addToCart(product);
                  // alert(`Added ${product.name} to the cart!`);
                }}
              >
                Add to Cart
              </button>

              {/* Wishlist Button (optional) */}
              <button
                className="border border-gray-300 text-gray-600 hover:bg-gray-100 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
