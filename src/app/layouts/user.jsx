import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import UserPage from "../components/pages/userPage/userPage";
import localStorageService from "../services/localStorage.service";
import { getUserById } from "../store/users";

const User = () => {
    const isAuth = localStorageService.getUser();
    const params = useParams();
    const { userId } = params;
    const user = useSelector(getUserById(userId));
    if (!user) return <Navigate to={"/"} />;
    if (!isAuth) return <Navigate to={"/register"} />;
    return <>{userId && <UserPage userId={userId} />}</>;
};

export default User;
