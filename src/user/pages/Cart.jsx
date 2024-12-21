import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom"; 
import { useUser } from "../../context/UserContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity,totalPrice } = useCart();
  const navigate = useNavigate();
  const { user } = useUser();


  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (!user) return <p>Please log in to view your cart.</p>;

  return (
      <div className="max-w-4xl mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
            {cart.length > 0 ? (
                <>
                  {cart.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between border-b py-4"
                    >
                      <div className="flex items-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 object-contain mr-4"
                        />
                        <div>
                          <h3 className="font-semibold">{product.name}</h3>
                          <p>₹{product.price}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                          disabled={product.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="text-sm">{product.qty}</span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <div className="mt-6 flex justify-between items-center">
                    <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
                    <div className="space-x-4">
                      <button
                        onClick={clearCart}
                        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                      >
                        Clear Cart
                      </button>
                      <button
                        onClick={handleCheckout}
                        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </>
            ) : (
              <p>Your cart is empty.</p>
            )}
      </div>
  );  
};

export default Cart;
