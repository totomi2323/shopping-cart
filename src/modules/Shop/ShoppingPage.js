import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import ItemCards from "./ItemCards";

const ShoppingPage = (props) => {
        console.log(props.itemQuantity)
    return(
        <div>
            <h1>Shopping Page</h1>
            <ItemCards itemQuantity={props.itemQuantity}
            setItemQuantity={props.setItemQuantity}/> 
        </div>
    )
}
export default ShoppingPage;