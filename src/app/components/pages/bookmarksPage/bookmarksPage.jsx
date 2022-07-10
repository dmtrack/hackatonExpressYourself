import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import localStorageService from "../../../services/localStorage.service";
import { getBookmarkUsersList, getUsersList, toggleUsersBookmarks } from "../../../store/users";
import UserCard from "../../ui/userCard";

const BookmarksPage = () => {
    const isAuth = localStorageService.getUser();
    const dispatch = useDispatch();
    const history = useHistory();
    const bookmarkedUsers = useSelector(getBookmarkUsersList());
    const users = useSelector(getUsersList());
    const findUsers = () => {
        const arr = [];
        users.forEach(user => {
            if (bookmarkedUsers.includes(user._id)) {
                arr.push(user);
            }
        });
        return arr;
    };
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
    const newUsers = findUsers();
    return (
        <div className="d-flex justify-content-center flex-wrap mb-5">
            {newUsers.length > 0 ? (
                newUsers.map(user => (
                    <div
                        key={user._id}
                        className="m-5 card w-25"
                    >
                        <UserCard
                            {...user}
                            onToggleBookmark={handleToggleBookmark}
                            onOpenCard={handleOpenCard}
                        />
                    </div>
                )
                )) : (
                <h1>Empty</h1>
            )}
        </div>
    );
};

export default BookmarksPage;
