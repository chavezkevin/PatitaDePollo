import React from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-dark bg-secondary fixed-top">
                <div className="container-fluid">
                    <Link to={"/"} className="text-decoration-none d-flex flex-row mb2">
                    <h1 className="navbar-brand">Patita de Pollo</h1>
                    <img className="iconoPrincipal" src={"/imagenes/drumstick-bite-solid.svg"} alt=""/>
                    </Link>
                    <div>

                        <CartWidget />
                        

                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">bienbenido</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink to={"/categoria/polloFrito"} className="nav-link active" aria-current="page">pollo frito</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/categoria/amburguezas"} className="nav-link active" aria-current="page">amburguezas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/categoria/postres"} className="nav-link active" aria-current="page" href="">postres</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/categoria/acompañamientos"} className="nav-link active" aria-current="page" href="">acompañamientos</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Navbar;