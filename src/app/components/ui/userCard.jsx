import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getUserBookmarkedStatus } from "../../store/users";
import Button from "../common/button";

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
    // console.log(roles);
    const handleClick = (id) => {
        onToggleBookmark(id);
    };
    const isSelectedUSer = useSelector(getUserBookmarkedStatus(_id));
    return (
        <div className="w-100 h-100 p-4 shadow-lg col-md-12 col-sm-8 col-xs-12 text-center">
            <div className="m-auto position-relative">             
                <div
                    style={styleAvatarWrapper}
                    className="border-2 border-primary"
                >
                    <i
                        className={"bi bi-bookmarks" + (isSelectedUSer ? "-fill" : "")}
                    ></i>
                </button> */}
                {/* <div className="w-75 h-75 m-auto rounded-circle"> */}
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
                <div className="d-flex center">
                    <Button
                        onClick={() => onOpenCard(_id)}
                        title="View Profile"
                    />
                    <button
                        className="btn btn-light btn-sm border  border-2 border-primary mx-4"
                        onClick={() => handleClick(_id)}
                    >
                        <i
                            className={"bi bi-bookmarks" + (isSelectedUSer ? "-fill" : "")}
                        ></i>
                    </button>
                </div>
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
