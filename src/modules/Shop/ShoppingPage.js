import React from "react";
import ItemCards from "./ItemCards";

const ShoppingPage = (props) => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <ItemCards
        checkOutItems={props.checkOutItems}
        setCheckOutItems={props.setCheckOutItems}
      />
    </div>
  );
};
export default ShoppingPage;
