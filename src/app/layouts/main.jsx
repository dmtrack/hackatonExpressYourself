import React from "react";
import UsersListPage from "../components/pages/usersListPage/usersListPage";
import useMockData from "../utils/mockData";

const Main = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        initialize();
    };
    return (
        <>
            <h1>Main</h1>
            <div className="container mt-5">
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
            </div>
            <UsersListPage />
        </>
    );
};

export default Main;
