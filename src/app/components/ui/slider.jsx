import React, { useState } from "react";
import PropTypes from "prop-types";

const Slider = ({ elements }) => {
    console.log(elements);
    const [activeSlide, setActiveSlide] = useState(0);
    const handleNextSlide = () => {
        if (activeSlide < elements.length - 1) {
            setActiveSlide((prevState) => prevState + 1);
        } else setActiveSlide(0);
    };
    const handlePrevSlide = () => {
        if (activeSlide > 0) {
            setActiveSlide((prevState) => prevState - 1);
        } else setActiveSlide(elements.length - 1);
    };
    return (
        elements && (
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {elements.map((element, index) => (
                        <div
                            className={
                                "carousel-item" +
                                (index === activeSlide ? " active" : "")
                            }
                            key={index + "slide"}
                        >
                            {" "}
                            <h6 className="mt-2 text-muted text-center">
                                {element.title}
                            </h6>
                            <img
                                className="d-block w-100"
                                src={element.image}
                                alt={element.title}
                            />
                            <div className="text-muted text-center mt-2">
                                <p>{element.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    onClick={handlePrevSlide}
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only"></span>
                </button>
                <button
                    className="carousel-control-next"
                    onClick={handleNextSlide}
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only"></span>
                </button>
            </div>
        )
    );
};

Slider.propTypes = {
    elements: PropTypes.array
};

export default Slider;
