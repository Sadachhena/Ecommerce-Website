import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { products } from "./ProductData/ProductData";

export default function Products({
  cartItems,
  setCartItems,
  wishItems,
  setWishItems,
  searchItems
}) {

  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Mens", "Womens", "NewArrival", "OnSale"];


  const filteredProducts = products.filter((item) => {

    const matchSearch =
      item.name.toLowerCase().includes((searchItems || "").toLowerCase());

    const matchTab =
      activeTab === "All" ||
      (activeTab === "Mens" && item.category === "Mens") ||
      (activeTab === "Womens" && item.category === "Womens") ||
      (activeTab === "NewArrival" && item.newArrival === true) ||
      (activeTab === "OnSale" && item.onSale === true);

    return matchSearch && matchTab;

  });


  const addToCart = (product) => {

    const exist = cartItems.find(item => item.id === product.id);

    if (exist) {

      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        )
      );

    } else {

      setCartItems([...cartItems, { ...product, qty: 1 }]);

    }

  };


  const addToWishlist = (product) => {

    const exist = wishItems.find(item => item.id === product.id);

    if (!exist) {
      setWishItems([...wishItems, product]);
    }

  };


  return (

    <div className="max-w-[1400px] mx-auto px-8 py-10">

      {/* Tabs */}

      <div className="flex gap-6 mb-10 border-b pb-3">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium ${
              activeTab === tab
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>


      {/* Products Grid */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {filteredProducts.length === 0 && (
          <p className="col-span-4 text-center text-gray-400">
            No products found
          </p>
        )}

        {filteredProducts.map((item) => (

          <div
            key={item.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded"
            />

            <h3 className="mt-2 font-semibold">
              {item.name}
            </h3>

            <p className="text-blue-500 font-bold">
              ${item.price}
            </p>


            <div className="flex gap-2 mt-3">

              <button
                onClick={() => addToWishlist(item)}
                className="p-2 bg-gray-100 rounded hover:text-red-500"
              >
                <FaHeart />
              </button>

              <button
                onClick={() => addToCart(item)}
                className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                <FaShoppingCart />
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}