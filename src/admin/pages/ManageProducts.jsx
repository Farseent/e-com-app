import React, { useState, useEffect } from 'react';
import { getAllProduct } from '../../api/productApi';
import { NavLink } from 'react-router-dom';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    // const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', category: '' });

    useEffect(() => {
        getAllProduct().then((res) => setProducts(res.data));
    }, []);


    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Manage Products</h1>
            <div className= " mb-8">
                <NavLink to={'/admin/addproduct'}> <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition-all duration-200">Add Product</button></NavLink>
            </div>

            {/* Product Table */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Product List</h2>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Image</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Product Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Price</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Description</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-3 text-sm text-gray-700"><img src={product.image} alt="image" className="w-16 h-16 object-cover rounded-md" /> </td>
                                <td className="px-6 py-3 text-sm text-gray-700">{product.name}</td>
                                <td className="px-6 py-3 text-sm text-gray-700">₹{product.price}</td>
                                <td className="px-6 py-3 text-sm text-gray-700">
                                    {product.description.length > 50
                                        ? product.description.substring(0, 50) + "..."
                                        : product.description}
                                </td>                                <td className="px-6 py-3">
                                   <NavLink to={`/admin/editproduct/${product.id}`}><button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded transition duration-200 mr-2">Edit</button></NavLink>
                                    <button /* onClick={() => handleDeleteProduct(product.id)}*/ className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded transition duration-200">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;
