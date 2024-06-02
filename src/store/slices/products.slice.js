import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => action.payload
       
    }
});

export const { setProducts } = productsSlice.actions;

export const getHotelsThink = (url) => (dispatch) => {
    axios.get(url)
     .then(res => dispatch(setProducts(res.data)))
     .catch(err =>  console.log(err))
       
     
};

export default productsSlice.reducer;
