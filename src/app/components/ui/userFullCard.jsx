import React from "react";
import PropTypes from "prop-types";
import Slider from "./slider";

const UserFullCard = ({ user, projects }) => {
    console.log(projects);
    return (
        <div>
            <div>
                <div className="card-body w-100">
                    <div className="d-flex flex-grow-0 align-items-center text-center">
                        <img
                            src={user.image}
                            className="rounded-circle"
                            width="200"
                        />
                        <div className="mt-3">
                            <h4>{`${user.name}`}</h4>
                            <h6>{`age: ${user.age}`}</h6>

                            <p className="text-secondary mb-1 d-flex flex-grow-0 text-center position-relative">
                                {user.aboutMe}
                            </p>
                        </div>
                    </div>
                    <div>Выполненные проекты</div>
                </div>
                {/*<span className="ms-2 text-secondary">*/}
                {/*    {user.socialNetworks.map((element) => (*/}
                {/*        <div key={element._id}>*/}
                {/*            <span>{`Ссылка: ${element.path}`}</span>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</span>*/}
            </div>
            <Slider elements={projects} />
        </div>
    );
};

UserFullCard.propTypes = {
    user: PropTypes.object,
    projects: PropTypes.array
};
export default UserFullCard;
