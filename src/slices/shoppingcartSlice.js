import { createSlice } from '@reduxjs/toolkit';

const shoppingcartSlice = createSlice({
    name: 'shoppingcart',
    initialState: { items: [] },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart } = shoppingcartSlice.actions;
export default shoppingcartSlice.reducer;