import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AllFoods from "../pages/AllFoods";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contacts from "../pages/Contacts";
import FoodDetails from "../pages/FoodDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
  );
};

export default Routers;
