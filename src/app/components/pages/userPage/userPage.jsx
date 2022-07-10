import React from "react";
import { useSelector } from "react-redux";
import UserFullCard from "../../ui/userFullCard";
import { useParams } from "react-router-dom";
import { getProjectsList } from "../../../store/projects";
import { getUserById } from "../../../store/users";

const UserPage = () => {
    const { userId } = useParams();
    let projectsList = null;
    const user = useSelector(getUserById(userId));
    if (user) {
        projectsList = useSelector(getProjectsList(user.projects));
    }

    return (
        user && (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">

                        <UserFullCard user={user} projects={projectsList} />
                    </div>
                </div>
            </div>
        )
    );
};

export default UserPage;
