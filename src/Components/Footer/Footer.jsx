import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (

    <footer className="bg-gray-900 text-gray-300 mt-16">

      <div className="max-w-[1400px] mx-auto px-8 py-12 grid md:grid-cols-4 gap-10">

        {/* Brand */}

        <div>

          <h2 className="text-2xl font-bold text-white mb-3">
            MyShop
          </h2>

          <p className="text-sm leading-6">
            Premium fashion store for men, women and kids. 
            Discover the latest trends and enjoy the best quality products.
          </p>

          <div className="flex gap-4 mt-4 text-lg">

            <FaFacebookF className="cursor-pointer hover:text-white"/>
            <FaInstagram className="cursor-pointer hover:text-white"/>
            <FaTwitter className="cursor-pointer hover:text-white"/>
            <FaYoutube className="cursor-pointer hover:text-white"/>

          </div>

        </div>


        {/* Quick Links */}

        <div>

          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
            <li className="hover:text-white cursor-pointer">Sale</li>

          </ul>

        </div>


        {/* Categories */}

        <div>

          <h3 className="text-white font-semibold mb-4">
            Categories
          </h3>

          <ul className="space-y-2 text-sm">

            <li className="hover:text-white cursor-pointer">Mens Fashion</li>
            <li className="hover:text-white cursor-pointer">Womens Fashion</li>
            <li className="hover:text-white cursor-pointer">Kids Wear</li>
            <li className="hover:text-white cursor-pointer">Accessories</li>

          </ul>

        </div>


        {/* Newsletter */}

        <div>

          <h3 className="text-white font-semibold mb-4">
            Newsletter
          </h3>

          <p className="text-sm mb-4">
            Subscribe to get updates on new products and offers.
          </p>

          <div className="flex">

            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
            />

            <button className="bg-blue-500 px-4 py-2 rounded-r text-white hover:bg-blue-600">
              Subscribe
            </button>

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className="border-t border-gray-700 text-center py-4 text-sm">

        © {new Date().getFullYear()} MyShop. All rights reserved.

      </div>

    </footer>

  );
}