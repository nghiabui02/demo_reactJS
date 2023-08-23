import {Link, useNavigate} from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate()
    return(
        <>
            <div className={'row'}>
                <div className={'col-12'}>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to={'/home'} className="nav-link active" aria-current="page" href="#">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link to={'add_product'} className="dropdown-item">Add new product</Link></li>
                                            <li><Link to={''} className="dropdown-item">Another action</Link></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><div className="form-inline my-2 my-lg-0">
                                                <button className=" ml-3 btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={()=> {
                                                    localStorage.clear()
                                                    navigate('/')
                                                }}>Logout
                                                </button>
                                            </div></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search"
                                           aria-label="Search"/>
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}