import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import testPics from "../../test.jpg";
import "../../style/itemCard-style.css";
import vbuck from "../../vbuck.png";

const ItemCards = (props) => {
  const { checkOutItems, setCheckOutItems } = props;
  const [shopItems, setShopItems] = useState([]);
  const [cards, setCards] = useState({
    test1: {
      url: testPics,
      price: 10,
      name: "Test item 1",
      id: uniqid(),
      quantity: 0,
    },
    test2: {
      url: testPics,
      price: 10,
      name: "Test item 2",
      id: uniqid(),
      quantity: 0,
    },
    test3: {
      url: testPics,
      price: 10,
      name: "Test item 3",
      id: uniqid(),
      quantity: 0,
    },
    test4: {
      url: testPics,
      price: 10,
      name: "Test item 4",
      id: uniqid(),
      quantity: 0,
    },
  });

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "{{authorization}}");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get",
      requestOptions
    );
    const items = await data.json();
    setShopItems(items.data);
   
  };

  const addItem = (e) => {
    let newItem = Object;
    let index = e.target.parentNode.getAttribute("index");
    for (let item in shopItems) {
      if (index === shopItems[item].itemId) {
        newItem = shopItems[item];
        if (checkOutItems[item]) {
          let pieces = checkOutItems[item].quantity +1
          setCheckOutItems((prevState) => ({
            ...prevState,
            [item]: { ...newItem, quantity: pieces },
          }));
        } else {
          setCheckOutItems((prevState) => ({
            ...prevState,
            [item]: {...newItem, quantity: 1}
          }));
        }
      }
    }
  };

  return (
    <div className="itemBox">
      {Object.keys(shopItems).map((fortniteItem) => {
        let imageUrl;
        if (!shopItems[fortniteItem].item.images.featured) {
          imageUrl = shopItems[fortniteItem].item.images.icon;
        } else {
          imageUrl = shopItems[fortniteItem].item.images.featured;
        }
        return (
          <div className="card" key={shopItems[fortniteItem].itemId}>
            <img src={imageUrl} alt={shopItems[fortniteItem].item.name}></img>
            <div>
              <p>{shopItems[fortniteItem].item.name}</p>
              <p>
                <img className="vbuck" src={vbuck}></img>
                {shopItems[fortniteItem].store.cost}
              </p>
            </div>
            <div className="quantity" index={shopItems[fortniteItem].itemId}>
              <button onClick={addItem}>Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemCards;
