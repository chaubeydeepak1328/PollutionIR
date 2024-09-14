import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";



const Navbar = ({ onFormSubmit }) => {

    const [search, setSearch] = useState("");

    const InputEvent = (event) => {
        setSearch(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(search)
        // console.log(`this is Navbar ${search}`)
    }




    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink to="/"> <img src={logo} alt="" style={{ height: '2.5rem' }} /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Dashboards</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/weather">Weather</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/route">Find Route</NavLink>
                            </li>
                        </ul>
                        <form onSubmit={handleSubmit} className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={InputEvent} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Navbar;