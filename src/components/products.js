import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slices/productsSlice';
import { addToCart } from '../slices/shoppingcartSlice';
import Product from './product';
import '../App.css';

const Products = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const products = useSelector(state => state.products.items);

    const CartHandler = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className='product-list'>
            {products.map(product => (
                <Product key={product.id} product={product} addToCart={CartHandler} />
            ))}
        </div>
    );
};

export default Products;