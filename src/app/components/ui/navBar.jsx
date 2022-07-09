import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-secondary">
            <div className="container-fluid d-flex justify-content-space-betwen">
                <ul className="nav bg-light rounded-3">
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
                <div className="bg-light fs-5 rounded-3 p-1 text-muted">
                    Hackaton-2 Project
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
