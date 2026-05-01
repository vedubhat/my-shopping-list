import { React, useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    return (
        <>
            {
                cart && cart.length > 0 && cart.map((item,index) => {
                    return <CartItem item={item} index={index} />;
                })
            }
        </>
    )
}

export default Cart;