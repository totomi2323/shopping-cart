import React from "react";
import "../style/itemCard-style.css";
import vbuck from "../vbuck.png"

const Checkout = (props) => {
  const { checkOutItems, setCheckOutItems } = props;

  const incrementItem = (e) => {
    let newItem;
    let index = e.target.parentNode.getAttribute("index");
    console.log(index)
    for (let item in checkOutItems) {
      if (index === checkOutItems[item].itemId) {
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
      if (index === checkOutItems[item].itemId) {
        newItem = checkOutItems[item];
        newItem.quantity -= 1;

        setCheckOutItems((prevState) => ({
          ...prevState,
          [item]: newItem,
        }));
      }
    }
  };

  const removeItem = (e) => {
    let newItem;
    let index = e.target.parentNode.getAttribute("index");
    for (let item in checkOutItems) {
      if (index === checkOutItems[item].itemId) {
        newItem = checkOutItems[item];
        newItem.quantity = 0;

        setCheckOutItems((prevState) => ({
          ...prevState,
          [item]: newItem,
        }));
      }
    }
  }

  return (
    <div>
      <h1>Checkout</h1>
      <div className="itemBox">
        {Object.keys(checkOutItems).map((item) => {
          let imageUrl;
          console.log(checkOutItems)
          if (!checkOutItems[item].item.images.featured) {
            imageUrl = checkOutItems[item].item.images.icon;
          } else {
            imageUrl = checkOutItems[item].item.images.featured;
          }
          if (checkOutItems[item].quantity >= 1) {
            return (
              <div className="card" key={checkOutItems[item].itemId}>
                <img
                  src={imageUrl}
                  alt={checkOutItems[item].item.name}
                ></img>
                <div>
                  <p>{checkOutItems[item].item.name}</p>
                  <p><img className="vbuck" src={vbuck}></img>{checkOutItems[item].store.cost}</p>
                </div>
                <div className="quantity" index={checkOutItems[item].itemId}>
                  <p>Quantity: {checkOutItems[item].quantity}</p>
                  <button onClick={incrementItem}>+</button>
                  <button onClick={decreaseItem}>-</button>
                  <button onClick={removeItem}> Remove </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Checkout;
