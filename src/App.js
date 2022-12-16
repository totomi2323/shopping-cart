import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import uniqid from "uniqid";
import Home from "./modules/Home";
import ShoppingPage from "./modules/Shop/ShoppingPage";
import Checkout from "./modules/Chceckout";
import NavBar from "./modules/Navbar";

function App() {
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar itemQuantity={itemQuantity} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <ShoppingPage
                itemQuantity={itemQuantity}
                setItemQuantity={setItemQuantity}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                itemQuantity={itemQuantity}
                setItemQuantity={setItemQuantity}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
