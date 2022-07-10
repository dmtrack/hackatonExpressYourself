import React from "react";
import UsersListPage from "../components/pages/usersListPage/usersListPage";
import Badge from "../components/common/badge";
import { colors } from "../utils/colors";
import useMockData from "../utils/mockData";

const Main = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        initialize();
    };
    return (
        <div className="bg-secondary bg-opacity-10">
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
            <div className="col-md-10 mx-auto pt-4 text-center">
                <Badge
                    content="Our Amazing Team"
                    color={colors.secondary}
                    size={1}
                />
                <div className="fs-4 pt-2">
                    We are students of group 23 of the Result School,
                    beginning Frontend Developers. We developed this project together with React and Redux technologies using the knowledge and skills gained while studying the Frontend module.
                </div>
                <div className="fs-5 py-2 text-secondary">
                    Here you can find information about each project participan and you can contact them if necessary.
                </div>
                <Badge
                    content="We are from different countries, from different professions, but now we are doing the same thing"
                    color={colors.primary}
                    size={4}
                />
            </div>
            <UsersListPage />
        </div>
    );
};

export default Main;
