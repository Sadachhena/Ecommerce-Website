import React, { useState } from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import Banner from '../Banner/Banner'
import Footer from "../Footer/Footer";
export default function Home() {

  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);

  const [showCart, setShowCart] = useState(false);
  const [showWishList, setShowWishList] = useState(false);
  
  const [searchItems,setSearchItems]=useState('')
  return (
    <>

      <Header
        setShowCart={setShowCart}
        setShowWishList={setShowWishList}
        cartItems={cartItems}
        wishItems={wishItems}
        setSearchItems={setSearchItems}
      />
        <Banner />
      <Products
        cartItems={cartItems}
        setCartItems={setCartItems}
        wishItems={wishItems}
        setWishItems={setWishItems}
        searchItems={searchItems}
      />

      {showCart && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          setShowCart={setShowCart}
        />
      )}

      {showWishList && (
        <WishList
          wishItems={wishItems}
          setWishItems={setWishItems}
          setShowWishList={setShowWishList}
          setCartItems={setCartItems}
        />
      )}

      <Footer />

    </>
  );
}