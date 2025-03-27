import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: { items: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(...action.payload);
            })
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.rejected,(state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            }) 
    },
});

export default productsSlice.reducer;