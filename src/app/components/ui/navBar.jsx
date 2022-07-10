import React from "react";
import { Link } from "react-router-dom";
import BookmarkCounter from "./bookmarkCounter";
import NavProfile from "./navProfile";

const NavBar = () => {
    return (
        <nav className="navbar bg-secondary py-3">
            <div className="container-fluid d-flex justify-content-space-betwen">
                <ul className="nav bg-light rounded-3 lh-1">
                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/">
                            Main
                        </Link>
                    </li>
                    <li className="nav-item position-relative">
                        <Link className="nav-link " aria-current="page" to="/bookmarks">
                            Bookmarks
                        </Link>
                        <BookmarkCounter />
                    </li>
                </ul>
                <div className="bg-light rounded-3 px-3 py-1 text-muted lh-2">
                    Hackaton-2 Project
                </div>
                <div className="d-flex">
                    <NavProfile />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
