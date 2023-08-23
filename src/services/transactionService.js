import {fetchTransaction} from "../redux/slices/transactionSlice";
import axios from "axios";

export const getTransaction = async (dispatch) => {
    const res= await  axios.get('http://localhost:8000/transactions')
    dispatch(fetchTransaction({transaction: res.data}))
}