import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getUserBookmarkedStatus } from "../../store/users";
import Button from "../common/button";
import BookMark from "../common/bookmark";

const UserCard = ({
    _id,
    name,
    surName,
    aboutMe,
    email,
    aboutMyWorkInThisProject,
    image,
    onOpenCard,
    onToggleBookmark
}) => {
    const handleClick = (id) => {
        onToggleBookmark(id);
    };
    const isSelectedUSer = useSelector(getUserBookmarkedStatus(_id));
    return (
        <div className="w-100 h-100 p-4 shadow-lg col-md-12 col-sm-8 col-xs-12 text-center">
            <div className="m-auto position-relative">
                <div className="rounded-circle m-auto" style={{
                    width: "175px",
                    height: "175px"
                }}>
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
                    <p className="card-text mb-1">{aboutMe}</p>
                    <p className="card-text mb-1">E-mail: {email}</p>
                    <p className="card-text mb-1">
                        In this project: {aboutMyWorkInThisProject}
                    </p>
                </div>
                <div className="d-flex center">
                    <Button
                        onClick={() => onOpenCard(_id)}
                        title="View Profile"
                    />
                    <BookMark
                        onClick={() => handleClick(_id)}
                        status = {isSelectedUSer}
                    />
                </div>
            </div>
        </div>
    );
};

UserCard.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    surName: PropTypes.string,
    aboutMe: PropTypes.string,
    email: PropTypes.string,
    aboutMyWorkInThisProject: PropTypes.string,
    image: PropTypes.string,
    sex: PropTypes.string,
    roles: PropTypes.array,
    onOpenCard: PropTypes.func,
    onToggleBookmark: PropTypes.func

};

export default UserCard;
