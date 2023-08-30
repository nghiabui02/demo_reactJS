import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/login/Login";
import Admin from "./page/Admin";
import AddProduct from "./page/AddProduct";
import EditStudent from "./page/EditStudent";
import Home from "./page/home/Home";
import ProductList from "./page/ListStudent";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import TransactionList from "./page/transaction/transactionList";
import MyForm from "./test";
import Register from "./page/login/Register";
function App() {
    return (
        <div className={'container-fluid'}>
            <Routes>
                <Route path={''} element={<Login/>}></Route>
                <Route path={'/register'} element={<Register/>}></Route>
                <Route path={'home'} element={<Home/>}>
                    <Route path={''} element={<TransactionList/>}></Route>
                    <Route path={'add_product'} element={<AddProduct/>}></Route>
                    <Route path={'edit/:id'} element={<EditStudent/>}></Route>
                </Route>
            </Routes>
            <ToastContainer theme='colored' position='top-center'/>
        </div>
    );
}

export default App;
