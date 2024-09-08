import React from "react";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#6e5ae2', width: '100vw' }} data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={require("../img/logo.png")} alt="zenith" style={{ width: '100px' }} /></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/product">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;