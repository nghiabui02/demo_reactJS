import {fetchTransaction} from "../redux/slices/transactionSlice";
import axios from "axios";

export const getTransaction = async (dispatch) => {
    const baseURL = 'http://localhost:8000/transactions';
    const res= await  axios.get(baseURL)
    dispatch(fetchTransaction({transaction: res.data}))
}