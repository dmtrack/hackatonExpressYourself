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
        if (bookmarkedUsers) {
            users.forEach(user => {
                if (bookmarkedUsers.includes(user._id)) {
                    arr.push(user);
                }
            });
        }
        return arr;
    };
    const handleOpenCard = (id) => {
        history.push(`/${id}`);
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
                        className="container-fluid w-50 my-3"
                    >
                        <UserCard
                            {...user}
                            onToggleBookmark={handleToggleBookmark}
                            onOpenCard={handleOpenCard}
                        />
                    </div>
                )
                )) : (
                <h1 className="my-5">Please, add users</h1>
            )}
        </div>
    );
};

export default BookmarksPage;
