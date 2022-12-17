import React, { useState } from "react";
import "../style/itemCard-style.css";

const Checkout = (props) => {
  const { checkOutItems, setCheckOutItems } = props;

  const incrementItem = (e) => {
    let newItem;
    let index = e.target.parentNode.getAttribute("index");
    for (let item in checkOutItems) {
      if (index === checkOutItems[item].id) {
        newItem = checkOutItems[item];
        newItem.quantity += 1;
        setCheckOutItems((prevState) => ({
          ...prevState,
          [item]: newItem,
        }));
      }
    }
  };

  const decreaseItem = (e) => {
    let newItem;
    let index = e.target.parentNode.getAttribute("index");
    for (let item in checkOutItems) {
      if (index === checkOutItems[item].id) {
        newItem = checkOutItems[item];
        newItem.quantity -= 1;
        
      
          setCheckOutItems((prevState) => ({
            ...prevState,
            [item]: newItem,
          }));
        
      }
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div className="itemBox">
        {Object.keys(checkOutItems).map((item) => {
          if (checkOutItems[item].quantity >= 1) {
          return (
            <div className="card" key={checkOutItems[item].id}>
              <img
                src={checkOutItems[item].url}
                alt={checkOutItems[item].name}
              ></img>
              <div>
                <p>{checkOutItems[item].name}</p>
                <p>Price: £{checkOutItems[item].price}</p>
              </div>
              <div className="quantity" index={checkOutItems[item].id}>
                <p>Quantity: {checkOutItems[item].quantity}</p>
                <button onClick={incrementItem}>+</button>
                <button onClick={decreaseItem}>-</button>
              </div>
            </div>
          );
}})}
      </div>
    </div>
  );
};
export default Checkout;
