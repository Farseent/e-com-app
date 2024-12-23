import React, { useEffect, useState } from 'react'
import { getProductbyId } from '../../api/productApi';
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct } from '../../api/adminApi';

export const EditProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProductbyId(id);
                setProduct(response.data);
            } catch (error) {
                console.error("Product not found!");
            }
        };
        fetchProduct();
    }
    , [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await editProduct(id, product);
        if (res) alert("Product updated successfully!");
        else alert("Failed to update product!");
        navigate("/admin/manageproduct");
    }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Edit Product</h1>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-600">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
                Image URL
            </label>
            <input
                type="text"
                id="image"
                name="image"
                value={product.image}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
                required
            />
            {product.image && (
                <img
                src={product.image}
                alt="Product Preview"
                className="mt-4 w-32 h-32 object-cover rounded-md"
                />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
            // disabled={loading}
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );  
}
