import Navbar from "../../components/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer";

export default function Home(){
    return(
        <>
            <div className='grid grid-cols-3 gap-3'>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                        <Footer></Footer>

            </div>

        </>
    )
}