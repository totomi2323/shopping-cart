import React from "react";
import "../style/itemCard-style.css";
import "../style/checkout-style.css";
import vbuck from "../vbuck.png";

const Checkout = (props) => {
  const { checkOutItems, setCheckOutItems, totalPrice } = props;

  const incrementItem = (e) => {
    let newItem;
    let index = e.target.parentNode.getAttribute("index");
    console.log(index);
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
  };
  const pay = () => {
    alert("Thank you your payment have been succesfull");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div className="itemBox">
        {Object.keys(checkOutItems).map((item) => {
          let imageUrl;
          if (!checkOutItems[item].item.images.featured) {
            imageUrl = checkOutItems[item].item.images.icon;
          } else {
            imageUrl = checkOutItems[item].item.images.featured;
          }
          if (checkOutItems[item].quantity >= 1) {
            return (
              <div
                className="card checkOutCard"
                key={checkOutItems[item].itemId}
              >
                <img src={imageUrl} alt={checkOutItems[item].item.name}></img>
                <div>
                  <p>{checkOutItems[item].item.name}</p>
                  <p>
                    <img className="vbuck" src={vbuck}></img>
                    {checkOutItems[item].store.cost}
                  </p>
                </div>
                <div className="quantity" >
                  <p>Quantity: {checkOutItems[item].quantity}</p>
                  <div index={checkOutItems[item].itemId}>
                    <button onClick={incrementItem}>+</button>
                    <button onClick={decreaseItem}>-</button>
                  </div>
                  <button onClick={removeItem} className={"button-wrapper"} index={checkOutItems[item].itemId}>
                    <p className="button-inner">Remove</p>
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
      <footer>
        <div>
          Total Price: <img className="vbuck" src={vbuck}></img> {totalPrice}
        </div>
        <button onClick={pay}>Pay</button>
      </footer>
    </div>
  );
};
export default Checkout;
