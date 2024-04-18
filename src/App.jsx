import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";  

function App() {
  const user = useSelector(state => state.user.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Login />} />
        <Route
          path="/products/:category"
          element={user ? <ProductList /> : <Navigate to="/" replace />}
        />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to="/" replace />}
        />
        <Route path="/success" element={<Success />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
