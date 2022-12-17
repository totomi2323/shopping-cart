import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./modules/Home";
import ShoppingPage from "./modules/Shop/ShoppingPage";
import Checkout from "./modules/Checkout";
import NavBar from "./modules/Navbar";

function App() {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [checkOutItems, setCheckOutItems] = useState({});

  useEffect(() => {
    let counter = 0;
    for (let item in checkOutItems) {
      counter += checkOutItems[item].quantity;
    }
    setItemQuantity(counter);
  }, [checkOutItems]);


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
