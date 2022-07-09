import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <ul className="nav bg-light">
                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/">
                            Main
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/bookmarks">
                            Bookmarks
                        </Link>
                    </li>
                </ul>
                <div className="d flex">
                    Hackaton-2 Project
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
