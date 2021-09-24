import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import {addToDb, getStoredCart} from '../../utilities/fakedb'
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(()=> {
        // console.log('product called');
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
        // console.log('product received')
    })
    },[])
    useEffect(()=> {
        // console.log('Local storage called');
        if (products.length) {
            const savedCart = getStoredCart()
            const storeCart = []
            for(const key in savedCart){
            // console.log(savedCart[key]);
            const addedProduct = products.find(product => product.key === key);
            if (addedProduct) {
                addedProduct.quantity = savedCart[key]
                // console.log(addedProduct);
                storeCart.push(addedProduct);
            }
        }
        setCart(storeCart)
        }
    },[products])
    
    const [cart,setCart] = useState([])
    const addProduct = (product) => {
        const newCart = [...cart , product]
        setCart(newCart)
        console.log(newCart);
        addToDb(product.key)
    }

    const [displayProducts,setDisplayProducts] = useState([])
    const searchHandle = (event) => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product =>  product.name.toLowerCase().includes(searchText.toLowerCase()) )
        setDisplayProducts(matchedProduct)
        console.log(matchedProduct.length);
    }
     return (
        <>
            <section className="search-container" onChange = {searchHandle}>
            <input type="text" />
        </section>
        <div className='shop-container'>
            <div className="product-container">
                {
                   displayProducts.map(product =><Product
                        key = {product.key}
                        product = {product}
                        addProduct = {addProduct} 
                         >
                         </Product>)
                }               
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </>
    );
};

export default Shop;