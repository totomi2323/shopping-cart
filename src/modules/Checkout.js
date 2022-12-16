import React, { useState } from "react";
import uniqid from "uniqid";
import "../style/itemCard-style.css";

const Checkout = (props) => {
  const [cards, setCards] = useState({});

  const incrementItem = (e) => {
    let newItem;
    let index = e.target.parentNode.getAttribute("index");
    for (let item in cards) {
      if (index === cards[item].id) {
        newItem = cards[item];
        newItem.quantity += 1;
        props.setItemQuantity(props.itemQuantity + 1);

        setCards((prevState) => ({
          ...prevState,
          [item]: newItem,
        }));
      }
      console.log(cards);
    }
  };

  const decreaseItem = (e) => {
    let newItem;
    let index = e.target.parentNode.getAttribute("index");
    for (let item in cards) {
      if (index === cards[item].id) {
        newItem = cards[item];
        newItem.quantity -= 1;
        console.log(newItem);
        props.setItemQuantity(props.itemQuantity - 1);
        setCards((prevState) => ({
          ...prevState,
          [item]: newItem,
        }));
      }
      console.log(cards);
    }
  };
  const { checkOutItems, setCheckOutItems } = props;
  return (
    <div>
      <h1>Checkout</h1>
      <div className="itemBox">
      {Object.keys(checkOutItems).map((item) => {
        console.log(checkOutItems[item]);
        return(
        <div className="card" key={checkOutItems[item].id}>
          <img src={checkOutItems[item].url}></img>
          <div>
            <p>{checkOutItems[item].name}</p>
            <p>Price: £{checkOutItems[item].price}</p>
          </div>
          <div className="quantity" index={checkOutItems[item].id}>
            <button onClick={incrementItem}>+</button>
            <button onClick={decreaseItem}>-</button>
          </div>
        </div>);
      })}
       </div>
    </div>
  );
};
export default Checkout;
