import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/pages/userPage/userPage";

const User = () => {
    const params = useParams();
    const { userId } = params;
    return (
        <>
            {userId && (
                <UserPage userId={userId} />
            )}
        </>
    );
};

export default User;
