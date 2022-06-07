import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Registeration from "../pages/Registeration";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Payment from "../pages/Payment";
function Router() {
  const [logoutUser, setLogoutUser] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog/:slug" element={<Product />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/registeration"
        element={<Registeration setLogoutUser={setLogoutUser} />}
      />
      <Route path="/login" element={<Login setLogoutUser={setLogoutUser} />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/payment" element={<Payment />} />

    </Routes>
  );
}

export default Router;
