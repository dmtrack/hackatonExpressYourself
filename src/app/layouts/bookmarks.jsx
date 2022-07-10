import React from "react";
import { Redirect } from "react-router-dom";
import BookmarksPage from "../components/pages/bookmarksPage";
import localStorageService from "../services/localStorage.service";

const Bookmarks = () => {
    const isAuth = localStorageService.getUser();
    return (
        <div className="">
            {isAuth ? (
                <BookmarksPage />
            ) : (
                <Redirect to={"/register"} />
            )}
        </div>
    );
};

export default Bookmarks;
