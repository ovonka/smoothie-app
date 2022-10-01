import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./components/About Us/AboutUs";
import Home from "./components/Home/Home";
import Header from "./components/layout/Header";
import Products from "./components/Products/Products";
import Login from "./components/Authentication/Login";
import Wishlist from "./components/Wishlist/Wishlist";
import ShoppingCart from "./components/Shopping Cart/ShoppingCart";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
