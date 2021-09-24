import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props
    // console.log(cart);
    let totalQuantity = 0
    let total = 0;
    for(const product of cart){
        console.log(product);
        // if (!product.quantity) {
        //     product.quantity = 1
        // }
        product.quantity = !product.quantity ? 1 : product.quantity
        total = total + product.price * product.quantity
        console.log(total);
        totalQuantity = totalQuantity + product.quantity
    } 
    const shippingCost = total > 0 ? 15 : 0;
    const tax = (total + shippingCost) *.20
    const totalPrice = total +  shippingCost + tax
    return (
        <div>
                <h3>Order Summury</h3>
                <h5>Items Ordered : {totalQuantity} </h5>
                <h4>Total : {total.toFixed(2)}</h4>
                <h4>Shipping : {shippingCost}</h4>
                <h3>Tax : {tax.toFixed(2)}</h3>
                <h3>Total Price : {totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;