import React from "react";
import PropTypes from "prop-types";

const Slider = ({ elements }) => {
    // const handleSlideChange = () => {};

    return (
        elements && (
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    {elements.map((element, index) =>
                        index === 0 ? (
                            <li
                                key={element._id}
                                data-target="#carouselExampleIndicators"
                                data-slide-to={elements.index + 1}
                                className="active"
                            ></li>
                        ) : (
                            <li
                                key={element._id}
                                data-target="#carouselExampleIndicators"
                                data-slide-to={elements.index + 1}
                                className=""
                            ></li>
                        )
                    )}
                </ol>
                <div className="carousel-inner">
                    {elements.map((element, index) =>
                        index === 0 ? (
                            <div
                                className="carousel-item active"
                                key={element._id}
                            >
                                <img
                                    className="d-block w-100"
                                    src={element.image}
                                    alt={element.title}
                                />
                            </div>
                        ) : (
                            <div className="carousel-item" key={element._id}>
                                <img
                                    className="d-block w-100"
                                    src={element.image}
                                    alt={element.title}
                                />
                            </div>
                        )
                    )}
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    );
    // return (
    //     elements && (
    //         <div className="container">
    //             <div
    //                 id="carousel"
    //                 className="carousel slide"
    //                 data-ride="carousel"
    //                 // style="display: inline-block"
    //             >
    //                 <div className="carousel-inner">
    //                     {elements.map((element, index) =>
    //                         index === 0 ? (
    //                             <div className="item active" key={element._id}>
    //                                 <img
    //                                     className="img-fluid"
    //                                     src={element.image}
    //                                     alt={element.title}
    //                                 />
    //                             </div>
    //                         ) : (
    //                             <div className="item" key={element._id}>
    //                                 <img
    //                                     className="img-fluid"
    //                                     src={element.image}
    //                                     alt={element.title}
    //                                 />
    //                             </div>
    //                         )
    //                     )}
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // );
};

Slider.propTypes = {
    elements: PropTypes.array
};

export default Slider;
