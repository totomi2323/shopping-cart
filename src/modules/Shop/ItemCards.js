import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import testPics from "../../test.jpg";
import "../../style/itemCard-style.css";
import vbuck from "../../vbuck.png";

const ItemCards = (props) => {
  const { checkOutItems, setCheckOutItems } = props;
  const [shopItems, setShopItems] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "1206cd7f-0824-416a-9db4-32ccd636255c");

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
          let pieces = checkOutItems[item].quantity + 1;
          setCheckOutItems((prevState) => ({
            ...prevState,
            [item]: { ...newItem, quantity: pieces },
          }));
        } else {
          setCheckOutItems((prevState) => ({
            ...prevState,
            [item]: { ...newItem, quantity: 1 },
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
            <div className="quantity">
              <button
                className={"button-wrapper"}
                onClick={addItem}
                index={shopItems[fortniteItem].itemId}
              >
                <p className="button-inner">Add</p>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemCards;
