import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/About Us/AboutUs";
import Home from "./components/Home/Home";
import Header from "./components/layout/Header";
import Products from "./components/Products/Products";
import Login from "./components/Authentication/Login";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
