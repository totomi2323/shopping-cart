import React, { useState } from "react";
import uniqid from "uniqid";
import testPics from "../../test.jpg";
import "../../style/itemCard-style.css";

const ItemCards = (props) => {
  const { checkOutItems, setCheckOutItems } = props;
  const [cards, setCards] = useState({
    test1:
    {
      url: testPics,
      price: 10,
      name: "Test item 1",
      id: uniqid(),
      quantity: 0,
    },
    test2:
    {
      url: testPics,
      price: 10,
      name: "Test item 2",
      id: uniqid(),quantity: 0,
    },
    test3:
    {
      url: testPics,
      price: 10,
      name: "Test item 3",
      id: uniqid(),quantity: 0,
    },
    test4:
    {
      url: testPics,
      price: 10,
      name: "Test item 4",
      id: uniqid(),quantity: 0,
    },
});

const addItem = (e) => {
    let newItem;
    let index = e.target.parentNode.getAttribute("index")
    for (let item in cards) {
        if (index === cards[item].id) {
            newItem = cards[item];
            newItem.quantity +=1;
            console.log(newItem)
            props.setItemQuantity(props.itemQuantity+1)

            setCheckOutItems((prevState) => ({
              ...prevState,
              [item]: newItem
            }));
            setCards((prevState)=> ({
                ...prevState,
                [item]: newItem,
            }))
        }
    }
    console.log(cards);
  }


  return (
    <div className="itemBox">
      {Object.keys(cards).map((card) => {
        return (
          <div className="card" key={cards[card].id}>
            <img src={cards[card].url}></img>
            <div>
              <p>{cards[card].name}</p>
              <p>Price: £{cards[card].price}</p>
            </div >
            <div className="quantity" index={cards[card].id}>
            <button onClick={addItem}>Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemCards;
