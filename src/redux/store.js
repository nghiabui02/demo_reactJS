import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice"
import userReducer from "./slices/userSlice"
import transactionReducer from "./slices/transactionSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        user: userReducer,
        transaction:transactionReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;