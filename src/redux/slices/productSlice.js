import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    product: []
}
const productSlices = createSlice({
    name: 'products',
    initialState,
    reducers:{
        fetchProduct: (state, action) =>{
            console.log(state.products)
            state.products = action.payload.products;
        },
        createProduct:(state, action)=>{
            state.products.push(action.payload);
        }
    }
})
export const {
    fetchProduct,
    creatProduct
} = productSlices.actions;
export default productSlices.reducer;