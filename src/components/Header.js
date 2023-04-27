import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand ms-3" to="/">
                    TextShare
                </Link>
            </div>
        </nav>
    );
};

export default Header;
