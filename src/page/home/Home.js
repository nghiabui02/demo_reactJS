import Navbar from "../../components/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer";

export default function Home(){
    return(
        <>
            <div className={'row'}>
                <div className={'col-12'}>
                    <Navbar></Navbar>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-12'}>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-12'}>
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}