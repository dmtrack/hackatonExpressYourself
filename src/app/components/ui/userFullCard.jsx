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
                            <div className="text-muted">
                                <i
                                    className="bi bi-caret-down-fill text-primary"
                                    role="button"
                                ></i>
                                <i
                                    className="bi bi-caret-up text-secondary"
                                    role="button"
                                ></i>
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
                <span className="ms-2 text-secondary">
                    {user.socialNetworks.map((element) => (
                        <div key={element._id}>
                            <span>{`Ссылка: ${element.path}`}</span>
                        </div>
                    ))}
                </span>
            </div>
            {/*<div*/}
            {/*    id="carouselExampleIndicators"*/}
            {/*    className="carousel slide"*/}
            {/*    data-ride="carousel"*/}
            {/*>*/}
            {/*    <ol className="carousel-indicators">*/}
            {/*        <li*/}
            {/*            data-target="#carouselExampleIndicators"*/}
            {/*            data-slide-to="0"*/}
            {/*            className="active"*/}
            {/*        ></li>*/}
            {/*        <li*/}
            {/*            data-target="#carouselExampleIndicators"*/}
            {/*            data-slide-to="1"*/}
            {/*        ></li>*/}
            {/*        <li*/}
            {/*            data-target="#carouselExampleIndicators"*/}
            {/*            data-slide-to="2"*/}
            {/*        ></li>*/}
            {/*    </ol>*/}
            {/*    <div className="carousel-inner">*/}
            {/*        {projects.map((element) => (*/}
            {/*            <div className="carousel-item active" key={element._id}>*/}
            {/*                <img*/}
            {/*                    className="d-block w-100"*/}
            {/*                    src={element.image}*/}
            {/*                    alt={element.title}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*    <a*/}
            {/*        className="carousel-control-prev"*/}
            {/*        href="#carouselExampleIndicators"*/}
            {/*        role="button"*/}
            {/*        data-slide="prev"*/}
            {/*    >*/}
            {/*        <span*/}
            {/*            className="carousel-control-prev-icon"*/}
            {/*            aria-hidden="true"*/}
            {/*        ></span>*/}
            {/*        <span className="sr-only">Previous</span>*/}
            {/*    </a>*/}
            {/*    <a*/}
            {/*        className="carousel-control-next"*/}
            {/*        href="#carouselExampleIndicators"*/}
            {/*        role="button"*/}
            {/*        data-slide="next"*/}
            {/*    >*/}
            {/*        <span*/}
            {/*            className="carousel-control-next-icon"*/}
            {/*            aria-hidden="true"*/}
            {/*        ></span>*/}
            {/*        <span className="sr-only">Next</span>*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    );
};

UserFullCard.propTypes = {
    user: PropTypes.object,
    projects: PropTypes.array
};
export default UserFullCard;
