import React from "react";
import { useState, useEffect} from 'react'
import { CartContext } from "../context/CartContext";
export const SuggestionBox = (props) => {
    const {result} = props;
    const {cart, setCart} = React.useContext(CartContext);
    const handleClick = (res) => {
        setCart(prevCart => [...prevCart, res]);
    }
    return (
        <>
            <div className="suggestion-box" style={{cursor: "pointer", backgroundColor: "lightgray", margin: "5px auto", padding: "5px", width:"170px", borderRadius: "5px" }} onClick={() => handleClick(result)}>
                <p style={{color: "black"}}>{result}</p>
            </div>
        </>
    )
}