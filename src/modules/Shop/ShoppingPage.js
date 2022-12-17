import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import ItemCards from "./ItemCards";

const ShoppingPage = (props) => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <ItemCards
        itemQuantity={props.itemQuantity}
        setItemQuantity={props.setItemQuantity}
        checkOutItems={props.checkOutItems}
        setCheckOutItems={props.setCheckOutItems}
      />
    </div>
  );
};
export default ShoppingPage;
