import React from "react";
import PropTypes from "prop-types";
import Slider from "./slider";
import Badge from "../common/badge";
import { colors } from "../../utils/colors";
import { useSelector } from "react-redux";
import { getSocialImageById } from "../../store/social";
import Progress from "../common/progress";
import { progressTypes } from "../../utils/elementProps";
import { getStackById } from "../../store/stack";
import Loader from "../common/loader";

const UserFullCard = ({ user, projects }) => {
    return (
        <div>
            <div className="row gutters-sm">
                <div className="col-md-5 mb-3 d-flex align-items-center">
                    <img
                        src={user.image}
                        className="rounded mx-auto d-block"
                        width="100%"
                    />
                </div>
                <div className="col-md-7">
                    <div className="text-center py-3">
                        <Badge
                            content={`${user.name} ${user.surName}`}
                            color={colors.secondary}
                            size={1}
                        />
                        <div className="pt-3">
                            <h6>{`age: ${user.age}`}</h6>
                        </div>
                        <div className="pt-3 fs-4">
                            {user.aboutMe}
                        </div>
                        <div className="pt-4">
                            <div className="text-center">
                                <Badge
                                    content="My skills:"
                                    color={colors.secondary}
                                    size={4}/>
                            </div>
                            <div className="container px-4">
                                <div className="row gx-4">
                                    {
                                        user.stack?.map(stack => {
                                            const stackData = useSelector(getStackById(stack._id));
                                            return (
                                                stackData
                                                    ? <div
                                                        key={stack._id}
                                                        style={{ width: "20%" }}>
                                                        <Progress
                                                            percent={stack.percent}
                                                            type={progressTypes.circle}
                                                            title={stackData.name}
                                                            color={stackData.color}
                                                        />
                                                    </div>
                                                    : <Loader />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-evenly pt-4">
                            <div className="fs-5">
                                I`m in social networks:
                            </div>
                            {user.socialNetworks?.map((element) => (
                                <div key={element._id}>
                                    <a href={element.path}>
                                        <img
                                            className="logo-img"
                                            src={useSelector(getSocialImageById(element._id))}
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-10 offset-md-1 pt-4">
                        <div className="text-center">
                            <Badge content="My projects" color={colors.secondary} size={2}/>
                        </div>
                        <Slider elements={projects} />
                    </div>
                </div>
            </div>
        </div>
    );
};

UserFullCard.propTypes = {
    user: PropTypes.object,
    projects: PropTypes.array
};
export default UserFullCard;
