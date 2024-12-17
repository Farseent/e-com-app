import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../context/UserContext";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { addToCart } = useUser();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center my-10">Loading...</p>;
  if (error) return <p className="text-center my-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {product && (
        <>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={product.image || "https://via.placeholder.com/300"}
              alt={product.name}
              className="w-72 h-72 object-contain mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-gray-600 mt-2 text-lg">{product.price}</p>
              <p className="text-gray-500 mt-4">{product.description}</p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-6 rounded"
                onClick={() =>{
                  addToCart(product);
                  alert(`Added ${product.name} to the cart!`)
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
