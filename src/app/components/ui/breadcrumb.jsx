import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getPathArray } from "../../utils/getPathArray";

const Breadcrumb = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const pathArr = getPathArray(pathname);
    const handleRedirect = (path) => {
        if (path === "users") return;
        history.push(`${path}`);
    };
    return (
        <div className="p-1 border-bottom my-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li
                        role="button"
                        onClick={handleRedirect}
                        className="breadcrumb-item active"
                        aria-current="page"
                    >
                        <i className="bi bi-house-door"></i>
                    </li>
                    {pathArr.length !== 0 && pathArr.map(p => (
                        <li
                            role="button"
                            onClick={() => handleRedirect(p)}
                            key={p}
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            {p}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;
