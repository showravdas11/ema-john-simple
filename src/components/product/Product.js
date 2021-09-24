import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product

    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div><img src={img} alt="" /></div>
            <div className="details">
                <h4 className="product-name">{name}</h4>
                <p>by:{seller}</p>
                <p>price:{price}</p>
                <p>only {stock} left in stock - order soon</p>
                <Rating className="rate" emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"></Rating>
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular"> {element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;