import React, { useState, useEffect } from 'react';
import { getAllOrders } from '../../api/adminApi';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        getAllOrders().then((res) => setOrders(res.data));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Manage Orders</h1>

            {/* Order Table */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Orders List</h2>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-left">Item</th>
                            <th className="px-4 py-2 text-left">Customer Name</th>
                            <th className="px-4 py-2 text-left">Total Price</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => 
                            order.items.map(item => (
                                <tr key={order.id} className="border-t">
                                    <td className="px-6 py-3 text-sm text-gray-700"><img src={item.image} alt="image" className="w-16 h-16 object-cover rounded-md" /> </td>
                                    <td className="px-4 py-2">{order.userName}</td>
                                    <td className="px-4 py-2">₹ {order.total}</td>
                                    <td className="px-4 py-2">
                                        <button className="bg-blue-600 hover:bg-blue-700  text-white p-2 rounded-md">View Details</button>
                                    </td>
                                </tr>
                      ))    
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;