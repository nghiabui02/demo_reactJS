import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    transaction: []
}
const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers:{
        fetchTransaction: (state, action) =>{
            console.log(state.transaction)
            state.transaction = action.payload.transaction;
        },
        createTransaction:(state, action)=>{
            state.transaction.push(action.payload);
        }
    }
})
export const {
    fetchTransaction,
    createTransaction
} = transactionSlice.actions;
export default transactionSlice.reducer;