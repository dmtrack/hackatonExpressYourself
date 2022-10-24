import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsersList, toggleUsersBookmarks } from "../../../store/users";
import localStorageService from "../../../services/localStorage.service";
import Slider3D from "../../ui/slider3D";

const UsersListPage = () => {
    const isAuth = localStorageService.getUser();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(getUsersList());
    const handleOpenCard = (id) => {
        if (isAuth) {
            navigate(`/${id}`);
        } else {
            navigate("/register");
        }
    };
    const handleToggleBookmark = (id) => {
        if (isAuth) {
            dispatch(toggleUsersBookmarks(id));
        } else {
            navigate("/register");
        }
    };
    return (
        <div className="d-flex flex-column">
            <Slider3D
                onToggleBookmark={handleToggleBookmark}
                onOpenCard={handleOpenCard}
                users={users}
            />
        </div>
    );
};

export default UsersListPage;
