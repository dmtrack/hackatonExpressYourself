import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import RegisterForm from "../components/ui/registerForm";
import { getIsLoggedIn } from "../store/users";

const Register = () => {
    const isAuth = useSelector(getIsLoggedIn());
    if (isAuth) return <Navigate to={"/"} />;
    return (
        <div className="my-5">
            <RegisterForm />
        </div>
    );
};

export default Register;
