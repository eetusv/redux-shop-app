import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../slices/shoppingcartSlice';
import '../App.css';

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.shoppingcart.items);
    const dispatch = useDispatch();

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cartItems.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p className='price'>{item.price} €</p>
                    <img src={item.image} alt={item.title}/>
                    <br></br>
                    <button className='btn' onClick={() => dispatch(removeFromCart(item.id))}>REMOVE</button>
                </div>
            ))}
        </div>
    );
};

export default ShoppingCart;
