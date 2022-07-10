import React from "react";
import { useSelector } from "react-redux";
import UserFullCard from "../../ui/userFullCard";
import { useParams } from "react-router-dom";
import { getProjectsList } from "../../../store/projects";
import { getUserById } from "../../../store/users";

const UserPage = () => {
    const { userId } = useParams();
    const user = useSelector(getUserById(userId));
    const projectsList = useSelector(getProjectsList(user.projects));
    console.log(user);
    console.log(projectsList);
    return (
        <div className="bg-secondary bg-opacity-10 p-2">
            <div className="container">
                <UserFullCard user={user} projects={projectsList} />
            </div>
        </div>
    );
};

export default UserPage;
