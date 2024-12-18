import React from 'react';

const Reports = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Admin Reports</h1>

            {/* Overview Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Total Sales</h2>
                    <p className="text-2xl">$5000</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Total Orders</h2>
                    <p className="text-2xl">150</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">New Users</h2>
                    <p className="text-2xl">200</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Order Status</h2>
                    <ul>
                        <li><strong>Pending:</strong> 30</li>
                        <li><strong>Shipped:</strong> 60</li>
                        <li><strong>Delivered:</strong> 50</li>
                        <li><strong>Cancelled:</strong> 10</li>
                    </ul>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Weekly Sales Chart Placeholder */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Weekly Sales</h2>
                    <div className="h-48 bg-gray-200 rounded-lg">[Sales Chart]</div>
                </div>

                {/* Weekly New Users Chart Placeholder */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Weekly New Users</h2>
                    <div className="h-48 bg-gray-200 rounded-lg">[Users Chart]</div>
                </div>
            </div>
        </div>
    );
};

export default Reports;