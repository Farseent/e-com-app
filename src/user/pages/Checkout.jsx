import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { addOrder } from "../../api/userApi";

const Checkout = () => {
  const { cart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [address, setAddress] = useState({ name: "", place: "", number: "" });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderConfirmation = async () => {
    if (!selectedPayment) return alert("Please select a payment method.");
    if (!address.name || !address.place || !address.number)
      return alert("Please fill out all address fields.");
    if (!cart.length) return alert("Your cart is empty!");

    try {
      const orderDetails = {
        userId: localStorage.getItem("userId"),
        userName: localStorage.getItem("userName"),
        items: cart,
        total: totalPrice,
        paymentMethod: selectedPayment,
        address,
        date: new Date().toISOString(),
      };

      const response = await addOrder(orderDetails);
      if (response) {
        alert(`Order placed successfully using ${selectedPayment}!`);
        clearCart();
        navigate("/orders");
      } else {
        alert("Failed to place the order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-6 bg-gray-50 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Checkout</h2>

      {cart.length > 0 ? (
        <>
          {/* Cart Summary */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Cart Summary</h3>
            <div className="border rounded-lg p-4 bg-white shadow-sm">
              {cart.map((product) => (
                <div key={product.id} className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-medium">{product.name}</h4>
                      <p className="text-gray-600">₹{product.price} x {product.qty}</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    ₹{product.price * product.qty}
                  </p>
                </div>
              ))}
              <div className="text-right text-xl font-bold mt-4">
                Total: ₹{totalPrice}
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Shipping Address</h3>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={address.name}
                onChange={handleAddressChange}
                className="border rounded-lg p-3 w-full"
              />
              <textarea
                name="place"
                placeholder="Address"
                value={address.place}
                onChange={handleAddressChange}
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                value={address.number}
                onChange={handleAddressChange}
                className="border rounded-lg p-3 w-full"
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Payment Method</h3>
            <div className="flex flex-col space-y-3">
              {["Credit Card", "Debit Card", "Google Pay", "Cash on Delivery"].map((method) => (
                <label key={method} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={selectedPayment === method}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="w-5 h-5"
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handleOrderConfirmation}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Confirm Order
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
            >
              Back to Cart
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-lg text-gray-600">Your cart is empty. Add some items to checkout.</p>
        </div>
      )}
    </div>
  );
}; 

export default Checkout;
 