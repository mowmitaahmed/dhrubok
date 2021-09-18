import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <>
        <div className="col-auto col-md-2 col-xl-2 col-sm-3 px-sm-4 px-2 bg-dark sidebar">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start nav-sidebar" id="menu">
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">React</span> 
                        </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100 text-secondary">
                                <Link to="/" className="nav-link px-0">Counter</Link>
                            </li>
                            <li>
                                <Link to="/form" className="nav-link px-0">Form</Link>
                            </li>
                            <li>
                                <Link to="/list" className="nav-link px-0">List</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default SideBar;