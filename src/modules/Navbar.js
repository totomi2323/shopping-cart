import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import "../style/nav.css"
import ItemCards from "./Shop/ItemCards";

const NavBar = (props) => {


  return (
    <nav>
      <ul aria-label="routes">
        <li>Item Shop</li>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/checkout">
          <li>Checkout: {props.itemQuantity} </li>
        </Link>
      </ul>
    </nav>
  );
};
export default NavBar;
