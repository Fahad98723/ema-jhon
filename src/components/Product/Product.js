import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';
const Product = (props) => {
    const {name,img, seller, price, stock ,star}= props.product;
    const {addProduct} = props
    const element = <FontAwesomeIcon icon={faShoppingBasket} />
    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h4 className = "product-name">{name}</h4>
            <p><small>by : {seller}</small></p>
            <p> $ {price} </p>
            <p><small>only {stock} left in stock - order soon</small></p>
            <Rating
            initialRating ={star}
            emptySymbol="far fa-star rating"
            fullSymbol="fas fa-star rating"
             readonly></Rating>
            <br />
            <button className="regular-btn" onClick = { () => addProduct(props.product)}>{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;