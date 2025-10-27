import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";
import UserPage from "./component/user/UserPage";
import UserCart from "./component/user/UserCart";
import ProductDashBoard from "./component/admin/ProductDashBoard";
import OrderDashboard from "./component/admin/OrderDashboard";

import UserOrders from "./component/user/UserOrders";
import SignupComponent from "./component/SignupComponent";
import RegisterComponent from "./component/RegisterComponent";


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  return (
    <BrowserRouter>
      <HeaderComponent  user={loggedInUser} />

       <Routes>
        {/* User routes */}
        <Route path="/user/home" element={<UserPage user={loggedInUser} />} />
        <Route path="/user/orders" element={<UserOrders user={loggedInUser} />} />
        <Route path="/user/cart" element={<UserCart user={loggedInUser} />} />

        {/* Admin routes */}
        <Route path="/admin/products" element={<ProductDashBoard />} />
        <Route path="/admin/orders" element={<OrderDashboard />} />

        {/* Auth routes */}
        <Route path="/signup" element={<SignupComponent setLoggedInUser={setLoggedInUser} />} />
        <Route path="/register" element={<RegisterComponent setLoggedInUser={setLoggedInUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
