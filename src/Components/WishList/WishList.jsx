import React from "react";
import { FaTimes, FaShoppingCart } from "react-icons/fa";

export default function WishList({
  wishItems,
  setWishItems,
  setCartItems,
  setShowWishList
}) {

  const removeItem = (id) => {
    setWishItems(wishItems.filter((item) => item.id !== id));
  };

  const addToCart = (product) => {

    setCartItems((prev) => {

      const exist = prev.find((item) => item.id === product.id);

      if (exist) {

        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        );

      }

      return [...prev, { ...product, qty: 1 }];

    });

    // optional: remove from wishlist after adding
    removeItem(product.id);

  };

  return (

    <div className="fixed left-0 top-0 w-[360px] h-full bg-white shadow-2xl z-50 flex flex-col">

      {/* Header */}

      <div className="flex justify-between items-center p-4 border-b">

        <h2 className="text-lg font-semibold">
          Wishlist ({wishItems.length})
        </h2>

        <button
          onClick={() => setShowWishList(false)}
          className="text-gray-500 hover:text-black"
        >
          <FaTimes />
        </button>

      </div>


      {/* Wishlist Items */}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {wishItems.length === 0 && (

          <p className="text-gray-400 text-center mt-10">
            Your wishlist is empty
          </p>

        )}

        {wishItems.map((item) => (

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

              <button
                onClick={() => addToCart(item)}
                className="mt-2 text-xs bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-1 hover:bg-blue-600"
              >
                <FaShoppingCart />
                Add to Cart
              </button>

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

    </div>

  );
}