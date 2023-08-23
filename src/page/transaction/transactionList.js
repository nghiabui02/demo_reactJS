import {useDispatch, useSelector} from "react-redux";
import {getTransaction} from "../../services/transactionService";
import {useEffect} from "react";


export default function TransactionList(){
    const dispatch = useDispatch();
    const {transaction} = useSelector(state => state.transaction);
    useEffect(()=>{
        getTransaction(dispatch)
    },[])
    return(
        <>
            {transaction.map(item => (
                <h2>{item.name}</h2>
            ))}
        </>
    )
}