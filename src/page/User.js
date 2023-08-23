import {Link, Outlet, useLocation} from "react-router-dom";

export default function User() {
    const usn = useLocation();
    console.log(usn)
    return (
        <>
            <h1>Đây là trang user</h1>
            <hr/>
            <h1>Xin chào {usn && usn.state}</h1>
            <Link to={'/'}>Logout</Link> |
            <Link to={''}>List</Link> |
            <Link to={'add'}>Add</Link>
            <Outlet></Outlet>
        </>
    )
}
