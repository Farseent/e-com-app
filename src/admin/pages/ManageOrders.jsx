import React, { useState, useEffect } from 'react';

// Mock API calls for demonstration purposes
const fetchOrders = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, customerName: 'John Doe', totalPrice: 250, status: 'Pending' },
                { id: 2, customerName: 'Jane Smith', totalPrice: 400, status: 'Shipped' },
                { id: 3, customerName: 'Sam Brown', totalPrice: 150, status: 'Delivered' },
            ]);
        }, 1000);
    });
};

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    // const [orderForm, setOrderForm] = useState({ id: '', status: '' });

    // Fetch orders when the component mounts
    useEffect(() => {
        fetchOrders().then(fetchedOrders => {
            setOrders(fetchedOrders);
        });
    }, []);

    const handleUpdateOrderStatus = (id, status) => {
        const updatedOrders = orders.map(order =>
            order.id === id ? { ...order, status: status } : order
        );
        setOrders(updatedOrders);
    };

    const handleDeleteOrder = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Manage Orders</h1>

            {/* Order Table */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Orders List</h2>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-left">Order ID</th>
                            <th className="px-4 py-2 text-left">Customer Name</th>
                            <th className="px-4 py-2 text-left">Total Price</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id} className="border-t">
                                <td className="px-4 py-2">{order.id}</td>
                                <td className="px-4 py-2">{order.customerName}</td>
                                <td className="px-4 py-2">${order.totalPrice}</td>
                                <td className="px-4 py-2">
                                    <select
                                        className="p-2 border rounded-md"
                                        value={order.status}
                                        onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Delivered">Delivered</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => handleDeleteOrder(order.id)}
                                        className="bg-red-600 text-white p-2 rounded-md"
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

export default ManageOrders;