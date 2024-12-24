import React from "react";
import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom"; 

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity,totalPrice } = useCart();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (!userId) return <p>Please log in to view your cart.</p>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Shopping Cart</h2>
  
      {cart.length > 0 ? (
        <>
          {/* Cart Items List */}
          {cart.map((product) => (
            <div key={product.id} className="flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md mb-6">
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
                  {/* Product Image & Info */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-contain rounded-md mb-4 sm:mb-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-500">₹{product.price}</p>
                  </div>
                </div>
    
                {/* Quantity Controls */}
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <button
                    onClick={() => updateQuantity(product.id, -1)}
                    className="text-gray-500 px-4 py-2 rounded-md text-2xl"
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-xl text-gray-700 font-semibold">{product.qty}</span>
                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    className="text-gray-500 px-4 py-2 rounded-md text-2xl"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(product.id)}
                className="mt-4 sm:mt-0 bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300"
              >
                Remove
              </button>
            </div>
          ))}
  
          {/* Cart Summary */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Total: ₹{totalPrice}</h3>
            <div className="space-x-4 mt-4 sm:mt-0">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-all"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-all"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        /* Empty Cart State */
        <div className="flex flex-col items-center p-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/13543/13543366.png"
            alt="Empty Cart"
            className="w-64 h-64 object-contain mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Your Cart is Empty!</h2>
          <p className="text-gray-500 mt-2 text-center max-w-md">
            It seems like you haven’t added anything to your cart yet. Don’t miss out on amazing deals—start shopping now!
          </p>
          <Link
            to="/"
            className="mt-6 px-8 py-3 bg-blue-600 text-white text-sm font-medium rounded-md shadow-md hover:bg-blue-700 transition-all"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
  
};

export default Cart;
