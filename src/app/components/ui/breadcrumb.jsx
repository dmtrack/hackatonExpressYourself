import React from "react";
import { useLocation } from "react-router-dom";
import { getPathArray } from "../../utils/getPathArray";

const Breadcrumb = () => {
    const { pathname } = useLocation();
    const pathArr = getPathArray(pathname);
    return (
        <div className="px-4 bg-light">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {pathArr.lenght === 0 ? (
                        <li className="breadcrumb-item active" aria-current="page">Main</li>
                    ) : (
                        pathArr.map(p => (
                            <li key={p} className="breadcrumb-item active" aria-current="page">{p}</li>
                        ))
                    )}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;
