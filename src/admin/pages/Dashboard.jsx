import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../api/productApi";
import { getAllOrders, getAllUsers } from "../../api/adminApi";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0); // Placeholder for revenue data

  useEffect(() => {
    getAllProduct().then((res) => setTotalProducts(res.data.length));
    getAllOrders().then((res) => {
      setTotalOrders(res.data.length);
      setTotalRevenue(res.data.reduce((acc, order) => acc + order.total, 0)); // Example revenue calculation
    });
    getAllUsers().then((res) => setTotalUsers(res.data.length));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Dashboard Header */}
      <header className="bg-white shadow p-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      </header>

      <main className="flex-1 flex flex-col p-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { title: "Total Users", value: totalUsers, icon: "👥", bgColor: "bg-blue-100" },
            { title: "Total Products", value: totalProducts, icon: "📦", bgColor: "bg-green-100" },
            { title: "Total Orders", value: totalOrders, icon: "🛒", bgColor: "bg-yellow-100" },
            { title: "Revenue", value: `₹${totalRevenue.toFixed(2)}`, icon: "💰", bgColor: "bg-red-100" },
          ].map((card, idx) => (
            <div key={idx} className={`rounded-lg shadow-md p-6 ${card.bgColor} flex items-center`}>
              <div className="text-4xl mr-4">{card.icon}</div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
                <p className="text-2xl font-bold text-gray-900 mt-2">{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* {Revenue Chart */}
        {/* <div className="bg-white rounded-lg shadow-md p-6 mb-6"> */}
          {/* <h2 className="text-xl font-semibold text-gray-700 mb-4">Revenue Overview</h2> */}
          {/* <div className="h-64 bg-gray-100 flex items-center justify-center text-gray-400"> */}
            {/* Replace this placeholder with a chart library, e.g., Chart.js */}
            {/* { <p>Chart Placeholder (e.g., Monthly Revenue Trend)</p>} */}
          {/* </div> */}
        {/* </div> */}

        {/* Recent Activities and Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Recent Activities
            </h2>
            <ul className="space-y-4">
              {[
                { activity: "New user registration", time: "5 mins ago" },
                { activity: "New order placed", time: "12 mins ago" },
                { activity: "Product added to inventory", time: "1 hour ago" },
                { activity: "Report generated", time: "2 hours ago" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span className="text-gray-600">{item.activity}</span>
                  <span className="text-sm text-gray-500">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Statistics Overview */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Statistics</h2>
            <div className="space-y-4">
              {[
                { label: "Order Fulfillment", value: "85%", color: "bg-green-500" },
                { label: "User Engagement", value: "68%", color: "bg-blue-500" },
                { label: "Inventory Restock", value: "92%", color: "bg-yellow-500" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-gray-600">{stat.label}</p>
                  <div className="relative w-full bg-gray-200 rounded-full h-4 mt-2">
                    <div
                      className={`absolute top-0 left-0 h-4 ${stat.color} rounded-full`}
                      style={{ width: stat.value }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{stat.value} completed</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
