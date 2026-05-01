import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState } from "react";   
const CartItem = ({ item, index }) => {

    const {cart, setCart} = useContext(CartContext);
    const [markedItems, setMarkedItems] = useState(false);
    const [style, setStyle] = useState({ backgroundColor: "lightgray", margin: "5px auto", padding: "5px", width: "170px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center"});
    
    const removeItem = (item) => {
        const updatedCart = cart.filter(cartItem => cartItem !== item);
        setCart(updatedCart);
    }

    const markItem = () => {
        setMarkedItems(prev => !prev);
        if(markedItems) {
            setStyle({ backgroundColor: "red", margin: "5px auto", padding: "5px", width: "170px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center"});
        }
        else{
            setStyle({ backgroundColor: "lightgray", margin: "5px auto", padding: "5px", width: "170px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center"});
        }
    }
    return (
        <div key={index} style={style}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ cursor: "pointer" }} onClick={() => markItem(item)}>
                <path d="M20 6L9 17l-5-5" />
            </svg>
            <span style={{ color: "black" }}>{item}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ cursor: "pointer" }} onClick={() => removeItem(item)}>
                <path d="M18 6L6 18M6 6l12 12" />
            </svg>
        </div>
    )
}

export default CartItem;