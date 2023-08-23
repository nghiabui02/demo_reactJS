import {fetchProduct} from "../redux/slices/productSlice";
import axios from "axios";

export const getProduct = async (dispatch) => {
    const res= await  axios.get('http://localhost:8000/transactions')
    dispatch(fetchProduct({products: res.data}))
}