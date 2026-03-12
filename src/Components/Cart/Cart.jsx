import React from "react";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";

export default function Cart({
  cartItems,
  setCartItems,
  setShowCart
}) {

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && (item.qty || 1) > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  return (

    <div className="fixed right-0 top-0 w-[360px] h-full bg-white shadow-2xl z-50 flex flex-col">

      {/* Header */}

      <div className="flex justify-between items-center p-4 border-b">

        <h2 className="text-lg font-semibold">
          Cart ({cartItems.length})
        </h2>

        <button
          onClick={() => setShowCart(false)}
          className="text-gray-500 hover:text-black"
        >
          <FaTimes />
        </button>

      </div>


      {/* Cart Items */}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {cartItems.length === 0 && (

          <p className="text-gray-400 text-center mt-10">
            Your cart is empty
          </p>

        )}

        {cartItems.map((item) => (

          <div
            key={item.id}
            className="flex gap-3 border rounded-lg p-2 shadow-sm"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />

            <div className="flex-1">

              <h3 className="text-sm font-medium">
                {item.name}
              </h3>

              <p className="text-blue-500 text-sm font-semibold">
                ${item.price}
              </p>

              {/* Quantity Controls */}

              <div className="flex items-center gap-2 mt-2">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                >
                  <FaMinus size={10}/>
                </button>

                <span className="text-sm">
                  {item.qty || 1}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                >
                  <FaPlus size={10}/>
                </button>

              </div>

            </div>


            {/* Remove button */}

            <button
              onClick={() => removeItem(item.id)}
              className="text-gray-400 hover:text-red-500"
            >
              <FaTimes />
            </button>

          </div>

        ))}

      </div>


      {/* Footer */}

      <div className="border-t p-4">

        <div className="flex justify-between mb-3 font-semibold">

          <span>Total</span>

          <span>
            ${total.toFixed(2)}
          </span>

        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">

          Checkout

        </button>

      </div>

    </div>

  );
}