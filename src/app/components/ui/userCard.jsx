import React from "react";
import PropTypes from "prop-types";
// import BookMark from "../common/bookmark";

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
    const handleClick = (id) => {
        console.log("bookmark ID: ", id);
    };
    return (
        <div className="p-4 shadow-lg col-md-12 col-sm-8 col-xs-12">
            <div className="m-auto w-50 h-50 position-relative">
                <button
                    className="position-absolute top-0 start-100 btn btn-light btn-sm border  border-2 border-primary"
                    onClick={() => handleClick(_id)}
                >
                    <i className="bi bi-bookmarks"></i>
                </button>
                <div className="w-75 h75 m-auto rounded-circle">
                    <img
                        src={image}
                        className="img-fluid border border-2 rounded-circle border-primary"
                        alt="..."
                    />
                </div>
            </div>
            <div className="card-body d-flex flex-column text-left align-items-center ">
                <div>
                    <h5 className="card-title mb-2 ">
                        <span>{name}</span>
                        <span> {surName}</span>
                    </h5>
                </div>
                <div className=" mw-75 fs-6 p-4 text-muted  ">
                    {/* <p className="card-text mb-1">Age: {age}</p> */}
                    <p className="card-text mb-1">{aboutMe}</p>
                    <p className="card-text mb-1">E-mail: {email}</p>
                    <p className="card-text mb-1">
                        In this project: {aboutMyWorkInThisProject}
                    </p>
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => onOpenCard(_id)}
                >
                    Open Card
                </button>
            </div>
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
