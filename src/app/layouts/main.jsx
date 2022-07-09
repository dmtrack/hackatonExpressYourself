import React from "react";
import UsersListPage from "../components/pages/usersListPage/usersListPage";
import useMockData from "../utils/mockData";
import Button from "../components/common/button";
import { colors } from "../utils/colors";
import { cornerTypes, btnSizes, progressTypes } from "../utils/elementProps";
import Badge from "../components/common/badge";
import Progress from "../components/common/progress";

const Main = () => {
    // const { error, initialize, progress, status } = useMockData();
    // const handleClick = () => {
    //     initialize();
    // };
    return (
        <>
            {/* <div className="container mt-5">
                <h3>Инициализация данных в FireBase</h3>
                <ul>
                    <li>Status: {status}</li>
                    <li>Progress: {progress}%</li>
                    {error && <li>Error: {error}</li>}
                </ul>
                <button className="btn btn-primary" onClick={handleClick}>
                    {" "}
                    Инициализировать
                </button>
            </div> */}
            <UsersListPage />
        </>
    );
};

export default Main;
