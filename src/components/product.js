import React from 'react';
import '../App.css';

const Product = ({ product, addToCart }) => {
    return (
        <div className='product-outer'>
            <img src={product.image} alt={product.title} />
            <div className='product-inner'>
                <h2>{product.title}</h2>
                <p className='price'>{product.price} €</p>
                <p>{product.description}</p>
                <p className='category'>{product.category}</p>
                <button className='btn' onClick={() => addToCart(product)}>BUY</button>
            </div>
        </div>
    );
};

export default Product;
