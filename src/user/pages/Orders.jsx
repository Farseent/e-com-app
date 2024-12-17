import React from "react";
import { useUser } from "../../context/UserContext";

const Orders = () => {
  const { orders } = useUser();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Your Orders</h2>
      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Order ID: {order.id}</h3>
              <p>Payment Method: {order.paymentMethod}</p>
              <p>Date: {order.date}</p>
              <h4 className="font-semibold mt-2">Items:</h4>
              <ul className="ml-4">
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - ₹{item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
              <p className="mt-2 font-semibold">Total: ₹{order.total}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders placed yet.</p>
      )}
    </div>
  );
};

export default Orders;
