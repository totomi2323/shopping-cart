import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import uniqid from "uniqid";
import Home from "./modules/Home";
import ShoppingPage from "./modules/Shop/ShoppingPage";
import Checkout from "./modules/Checkout";
import NavBar from "./modules/Navbar";
import testPics from "./test.jpg";

function App() {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [checkOutItems, setCheckOutItems] = useState({
  });

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
                checkOutItems={checkOutItems}
                setCheckOutItems={setCheckOutItems}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                itemQuantity={itemQuantity}
                setItemQuantity={setItemQuantity}
                checkOutItems={checkOutItems}
                setCheckOutItems={setCheckOutItems}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
