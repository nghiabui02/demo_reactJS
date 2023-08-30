import {useDispatch, useSelector} from "react-redux";
import {getTransaction} from "../../services/transactionService";
import {useEffect} from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";


export default function TransactionList(){
    const dispatch = useDispatch();
    const {transaction} = useSelector(state => state.transaction);
    useEffect(()=>{
        getTransaction(dispatch)
    },[])

    return(
        <>
            <div style={{width:'70%', margin:'auto', marginTop:'100px'}}>
            <Table responsive="sm">
            <thead>
            <tr>
            <th>Ordinal</th>
            <th>Wallet</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Option</th>
            <th></th>
            </tr>
            </thead>

            {/* eslint-disable-next-line array-callback-return */}
            {transaction.map((item, key) =>(
                <tbody>
                <tr>
                    <td>{key+1}</td>
                    <td>{item.wallet.money}</td>
                    <td>{item.date}</td>
                    <td>{item.amount}</td>
                    <td>{item.categories.name}</td>
                    <td>{item.type}</td>
                    <td><button className='btn btn-outline-primary'>Edit</button></td>
                    <td><button className='btn btn-outline-danger' onClick={()=>{
                        axios.delete('http://localhost:8000/transactions/' + item.id).then(()=>{
                            getTransaction(dispatch)
                        })
                    }}>Delete</button></td>
                </tr>
                </tbody>
            ))}
            </Table>
            </div>
        </>
    )
}