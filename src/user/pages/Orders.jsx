import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { OrdersByUserId } from "../../api/userApi";
import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem('userId');
  const {cart} = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    OrdersByUserId(userId)
    .then((res) => setOrders(res))
    .catch((err) => console.error("Error fetching orders:", err));
  }, [cart]);
  

  if (!userId) return <p>Please log in to view orders</p>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          // orders.items.map((item) => (
          // <div>
            <div key={order.id} className="border p-4 mb-4 rounded shadow">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Total:</strong> ₹{order.total}</p>
              <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
              <h3 className="font-bold mt-4">Items:</h3>
            <table className="table-auto w-full text-left ">
              <thead>
                <tr className="">
                  <th className="border border-gray-200 px-4 py-2">Product</th>
                  <th className="border border-gray-200 px-4 py-2">Image</th>
                  <th className="border border-gray-200 px-4 py-2">Price</th>
                  <th className="border border-gray-200 px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items && order.items.length > 0 ? (
                  order.items.map((item) => (
                    <tr key={item.id}>
                      <td className="border border-gray-200 px-4 py-2">{item.name}</td>
                      <td className="border border-gray-200 px-4 py-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain"
                          onClick={() => navigate(`/product-details/${item.id}`)}
                        />
                      </td>
                      <td className="border border-gray-200 px-4 py-2">{item.qty} x {item.price}</td>
                      <td className="border border-gray-200 px-4 py-2">₹{item.qty * item.price}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="border border-gray-200 px-4 py-2 text-center">
                      No items in this order.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            </div>
          ))
      ) : (
        <div className="flex flex-col items-center p-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/17568/17568958.png"
            alt="Empty Cart"
            className="w-64 h-64 object-contain mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-700">No Orders Found!</h2>
          <p className="text-gray-500 mt-2 text-center max-w-md">
            You haven’t placed any orders yet. Browse our catalog and order your favorite items today!                       </p>
          <Link
            to="/"
            className="mt-6 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;

//npx json-server --watch order.json --port 5001
