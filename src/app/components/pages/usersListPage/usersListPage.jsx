import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUsersList, toggleUsersBookmarks } from "../../../store/users";
import localStorageService from "../../../services/localStorage.service";
import Slider3D from "../../ui/slider3D";

const UsersListPage = () => {
    const isAuth = localStorageService.getUser();
    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector(getUsersList());
    const handleOpenCard = (id) => {
        history.push(`/users/${id}`);
    };
    const handleToggleBookmark = (id) => {
        if (isAuth) {
            dispatch(toggleUsersBookmarks(id));
        } else {
            history.push("/register");
        }
    };
    return (
        <div className="d-flex flex-column">
            <div className="col-md-8 mx-auto my-3 p-2">
                <h1 className="text-center">Our Team</h1>
                <p>
                    We are students of group 23 of the Result School,
                    beginning Frontend Developers.
                </p>
                <p>
                    Here you can find information about each project participan
                    and you can contact us if necessary.
                </p>
                <p>
                    We are doing a project together with React and Redux using the
                    skills we have learned from learning the front module.
                </p>
                <p>
                    We are from different countries, from different professions,
                    but now we are doing the same thing
                </p>
            </div>
            <Slider3D
                onToggleBookmark={handleToggleBookmark}
                onOpenCard={handleOpenCard}
                users={users}
            />
        </div>
    );
};

export default UsersListPage;
