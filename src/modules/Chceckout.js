import React, { useState } from "react";
import uniqid from "uniqid";

const Checkout = (props) => {
        const [cards,setCards]= useState ({})

    const incrementItem = (e) => {
        let newItem;
        let index = e.target.parentNode.getAttribute("index")
        for (let item in cards) {
            if (index === cards[item].id) {
                newItem = cards[item];
                newItem.quantity +=1;
                props.setItemQuantity(props.itemQuantity+1)
                
                setCards((prevState)=> ({
                    ...prevState,
                    [item]: newItem,
                }))
            }
            console.log(cards)
        }
      }

      const decreaseItem = (e) => { 
        let newItem;
        let index = e.target.parentNode.getAttribute("index")
        for (let item in cards) {
            if (index === cards[item].id) {
                newItem = cards[item];
                newItem.quantity -=1;
                console.log(newItem)
                props.setItemQuantity(props.itemQuantity-1)
                setCards((prevState)=> ({
                    ...prevState,
                    [item]: newItem,
                }))
            }
            console.log(cards)
        }
      }
    return(
        <div>
            <h1>Checkout</h1>
            <button onClick={incrementItem}>+</button>
            <button onClick={decreaseItem}>-</button>
        </div>
    )
}
export default Checkout;