import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getUserById } from "../../store/users";
import { getPathArray } from "../../utils/getPathArray";

const Breadcrumb = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const pathArr = getPathArray(pathname);
    const handleRedirect = (path) => {
        if (typeof path === "object") {
            history.push("/");
            return;
        }
        history.push(`${path}`);
    };

    const getPath = (path) => {
        const user = useSelector(getUserById(path));
        if (user) return (user.name + " " + user.surName);
        return path;
    };
    return (
        <div className="ps-1 border-bottom  border-secondary pt-3 bg-secondary bg-opacity-25">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li
                        role="button"
                        onClick={handleRedirect}
                        className="breadcrumb-item"
                        aria-current="page"
                    >
                        <i className="bi bi-house-door"></i>
                    </li>
                    {pathArr.length !== 0 && pathArr.map(path => (
                        <li
                            role="button"
                            onClick={() => handleRedirect(path)}
                            key={path}
                            className="breadcrumb-item"
                            aria-current="page"
                        >
                            {getPath(path)}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;
