import React from "react";
// import PropTypes, { element } from "prop-types";
import { getUserById } from "../../../store/users";
import { useSelector } from "react-redux";
import UserFullCard from "../../ui/userFullCard";
import { useParams } from "react-router-dom";
import { getProjectsList } from "../../../store/projects";

const UserPage = () => {
    const { userId } = useParams();
    const user = useSelector(getUserById(userId));
    const projectsList = useSelector(getProjectsList());

    // function findProjects(id) {
    //     useSelector(getProjectById(id));
    // }

    // console.log(user);
    const getProjects = (elements) => {
        const projectsArray = [];
        elements.forEach((elem) => {
            for (const project in projectsList) {
                if (elem === project._id) {
                    projectsArray.push({
                        _id: project._id
                    });
                }
            }
        });
        return projectsArray;
    };
    function test() {
        if (user) {
            return getProjects(user.projects);
        }
    }
    const result = test();
    console.log(result);

    return (
        user && (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserFullCard user={user} />
                    </div>
                </div>
            </div>
        )
    );
};

export default UserPage;
