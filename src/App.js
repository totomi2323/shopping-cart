import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./modules/Home";
import ShoppingPage from "./modules/Shop/ShoppingPage";
import Checkout from "./modules/Checkout";
import NavBar from "./modules/Navbar";

function App() {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [checkOutItems, setCheckOutItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState()

  useEffect(() => {
    let counter = 0;
    let price = 0;
    for (let item in checkOutItems) {
      counter += checkOutItems[item].quantity;
      price += (checkOutItems[item].quantity) * (checkOutItems[item].store.cost)
    }

    setItemQuantity(counter);
    setTotalPrice(price)
  }, [checkOutItems]);


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar itemQuantity={itemQuantity} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/shop"
            element={
              <ShoppingPage
                checkOutItems={checkOutItems}
                setCheckOutItems={setCheckOutItems}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                totalPrice={totalPrice}
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
