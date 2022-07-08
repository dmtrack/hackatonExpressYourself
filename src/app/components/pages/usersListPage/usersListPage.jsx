import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDataStatus, getUsersList } from "../../../store/users";
import Loader from "../../common/loader";
import UserCard from "../../ui/userCard";

const UsersListPage = () => {
    const history = useHistory();
    const users = useSelector(getUsersList());
    const dataStatus = useSelector(getDataStatus());
    const handleOpenCard = (id) => {
        history.push(`/users/${id}`);
    };
    if (!dataStatus) return <Loader />;
    return (
        <>
            <h1>UsersListPage</h1>
            {users.map(user => (
                <UserCard
                    key={user._id}
                    onOpenCard={handleOpenCard}
                    {...user}
                />
            ))}
        </>
    );
};

export default UsersListPage;
