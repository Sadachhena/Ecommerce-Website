import React from "react";
import { FaSearch, FaShoppingBag, FaHeart } from "react-icons/fa";

export default function Header({
  searchItems,
  setSearchItems,
  showCart,
  setShowCart,
  showWishList,
  setShowWishList,
  cartItems,
  wishItems
}) {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-[1400px] mx-auto px-8 py-3 flex justify-between items-center">

        <h1 className="text-xl font-bold text-blue-500">
          MyShop
        </h1>

        <div className="relative w-[220px]">

          <input
            type="text"
            placeholder="Search..."
            value={searchItems}
            onChange={(e)=>setSearchItems(e.target.value)}
            className="w-full border border-blue-400 rounded-full pl-3 pr-8 py-1"
          />

          <FaSearch className="absolute right-3 top-2 text-gray-500"/>
        </div>

        <div className="flex gap-6 text-xl">

          <div
          onClick={()=>setShowWishList(!showWishList)}
          className="relative cursor-pointer"
          >

            <FaHeart />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex justify-center items-center rounded-full">
              {wishItems.length}
            </span>

          </div>

          <div
          onClick={()=>setShowCart(!showCart)}
          className="relative cursor-pointer"
          >

            <FaShoppingBag />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex justify-center items-center rounded-full">
              {cartItems.length}
            </span>

          </div>

        </div>

      </div>

    </header>
  );
}