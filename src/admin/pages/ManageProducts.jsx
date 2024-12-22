import React, { useState, useEffect } from 'react';
import { getAllProduct } from '../../api/productApi';

// Mock API calls for demonstration purposes
// const fetchProducts = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, name: 'Product 1', price: 100, stock: 20, category: 'Category 1' },
//                 { id: 2, name: 'Product 2', price: 150, stock: 15, category: 'Category 2' },
//                 { id: 3, name: 'Product 3', price: 200, stock: 10, category: 'Category 1' },
//             ]);
//         }, 1000);
//     });
// };

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', category: '' });

    useEffect(() => {
        getAllProduct().then((res) => setProducts(res.data));
    }, []);

    // Fetch products when the component mounts
    // useEffect(() => {
    //     fetchProducts().then(fetchedProducts => {
    //         setProducts(fetchedProducts);
    //     });
    // }, []);

    // const handleAddProduct = () => {
    //     // Logic to add product
    //     const newProductData = { ...newProduct, id: products.length + 1 };
    //     setProducts([...products, newProductData]);
    //     setNewProduct({ name: '', price: '', stock: '', category: '' }); // Reset the form
    // };

    // const handleDeleteProduct = (id) => {
    //     setProducts(products.filter(product => product.id !== id));
    // };

    // const handleEditProduct = (id) => {
    //     const product = products.find(product => product.id === id);
    //     setNewProduct(product);
    // };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Manage Products</h1>

            {/* Add New Product Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Product</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input
                        type="text"
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Product Name"
                        value={newProduct.name}
                        // onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                    <input
                        type="number"
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Price"
                        value={newProduct.price}
                        // onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                    <input
                        type="number"
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Stock"
                        value={newProduct.stock}
                        // onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    />
                    <input
                        type="text"
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Category"
                        value={newProduct.category}
                        // onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    />
                </div>
                <button
                    // onClick={handleAddProduct}
                    className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition-all duration-200"
                >
                    Add Product
                </button>
            </div>

            {/* Product Table */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Product List</h2>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Product Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Price</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Stock</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Category</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-3 text-sm text-gray-700">{product.name}</td>
                                <td className="px-6 py-3 text-sm text-gray-700">₹ {product.price}</td>
                                <td className="px-6 py-3 text-sm text-gray-700">{product.stock}</td>
                                <td className="px-6 py-3 text-sm text-gray-700">{product.category}</td>
                                <td className="px-6 py-3">
                                    <button
                                        // onClick={() => handleEditProduct(product.id)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded transition duration-200 mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        // onClick={() => handleDeleteProduct(product.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded transition duration-200"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;
