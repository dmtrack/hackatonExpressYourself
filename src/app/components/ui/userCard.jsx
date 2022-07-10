import React from "react";
import PropTypes from "prop-types";
import BookMark from "../common/bookmark";
import { useSelector } from "react-redux";
import { getUserBookmarkedStatus } from "../../store/users";
import Badge from "../common/badge";
import { colors } from "../../utils/colors";
import { getRoles } from "@testing-library/react";

const UserCard = ({
    _id,
    name,
    surName,
    aboutMe,
    email,
    aboutMyWorkInThisProject,
    image,
    age,
    roles,
    onOpenCard,
    onToggleBookmark
}) => {
    console.log(roles);
    const handleClick = (id) => {
        onToggleBookmark(id);
    };
    const userRoles = useSelector(getRoles());
    console.log(userRoles);
    const bookmarkStatus = useSelector(getUserBookmarkedStatus(_id));
    const styleAvatarWrapper = {
        width: "200px",
        height: "200px",
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: "50%"
    };
    const styleAvatar = {
        width: "auto",
        height: "100%",
        margin: "0 auto"
    };
    return (
        <div className="p-4 shadow-lg col-md-12 col-sm-8 col-xs-12 h-100">
            <div className="m-auto w-50  position-relative">
                <BookMark
                    className="position-absolute top-0 start-100 btn btn-light btn-sm border  border-2 border-primary"
                    status={bookmarkStatus}
                    onClick={() => handleClick(_id)}
                />
                <div
                    style={styleAvatarWrapper}
                    className="border-2 border-primary"
                >
                    <img src={image} style={styleAvatar} alt="..." />
                </div>
            </div>
            <div className="card-body d-flex flex-column text-left align-items-center ">
                <div>
                    <h5 className="card-title mb-2 ">
                        <span>{name}</span>
                        <span> {surName}</span>
                    </h5>
                </div>
                {/* {roles.map((role) => (
                    <Badge key={role._id} {...role} />
                ))} */}
                <Badge color={colors.primary} content="student" />
                <div className=" mw-50 fs-6 p-4 text-muted">
                    <p className="mb-2">Age: {age}</p>
                    <p className="mb-2">{aboutMe}</p>
                    <p className="mb-2">E-mail: {email}</p>
                    <p className="mb-2">
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
    age: PropTypes.number,
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
