import React from "react";
import PropTypes from "prop-types";

const UserCard = ({
    _id,
    name,
    surName,
    age,
    aboutMe,
    email,
    aboutMyWorkInThisProject,
    image,
    sex,
    projects,
    roles,
    socialNetworks,
    stack,
    onOpenCard
}) => {
    return (
        <div className="w-100 mb-5 shadow-lg p-4 mb-5 bg-body rounded">
            <div>
                <span>{name}</span>
                <span> {surName}</span>
            </div>
            <img src={image} className="w-25"/>
            <p>{age}</p>
            <p>{aboutMe}</p>
            <p>{email}</p>
            <p>{sex}</p>
            <p>{aboutMyWorkInThisProject}</p>
            <button
                className="btn btn-primary"
                onClick={() => onOpenCard(_id)}
            >
                Open Card
            </button>
        </div>
    );
};

UserCard.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    surName: PropTypes.string,
    age: PropTypes.number,
    aboutMe: PropTypes.string,
    email: PropTypes.string,
    aboutMyWorkInThisProject: PropTypes.string,
    image: PropTypes.string,
    sex: PropTypes.string,
    projects: PropTypes.array,
    roles: PropTypes.array,
    socialNetworks: PropTypes.arrayOf(PropTypes.object),
    stack: PropTypes.arrayOf(PropTypes.object),
    onOpenCard: PropTypes.func
};

export default UserCard;
