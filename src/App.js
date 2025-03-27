import './App.css';
import Products from './components/products';
import ShoppingCart from './components/shoppingcart';

const App = () => {
    return (
        <div className='App'>
            <h1>Products</h1>
            <ShoppingCart />
            <Products />
        </div>
    );
};

export default App;