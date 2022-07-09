import React from "react";
import UsersListPage from "../components/pages/usersListPage/usersListPage";
import useMockData from "../utils/mockData";
import Button from "../components/common/button";
import { colors } from "../utils/colors";
import { cornerTypes, btnSizes, progressTypes } from "../utils/elementProps";
import Badge from "../components/common/badge";
import Progress from "../components/common/progress";

const Main = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        initialize();
    };
    return (
        <>
            <h1>Main</h1>

            <Button title="button witn type, size" color = { colors.secondary } type = {cornerTypes.squared} size = { btnSizes.lg}/>
            <Button title="button without type, size" color = { colors.warning } />

            <Badge color = {colors.success} content = "Example badge" />
            <Badge color = {colors.danger} content = "badge with size and type" type = {cornerTypes.squared} size = {1} />
            <div style={{ width: "50%", padding: "20px" }} >
                <Progress title="HTML" percent ={25} color = {colors.success} type={progressTypes.animatedStripe} />
                <Progress title="CSS" percent ={65} color = {colors.primary} />
                <Progress title="React" percent ={80} color = {colors.danger} type={progressTypes.circle}/>
            </div>

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
