import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";

const Orders = () => {
  const { email } = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/orders?email=${email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [email]);

  if (!email) return <p>Please log in to view orders</p>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="border p-4 mb-4 rounded shadow">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Items:</strong> {order.items.join(", ")}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Orders;
