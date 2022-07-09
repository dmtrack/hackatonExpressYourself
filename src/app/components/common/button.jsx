import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, onClick, title, type, size }) => {
    const classes = `btn btn-${color}` +
        (type === "squared" ? " squared" : "") +
        (size === "lg" ? " btn-lg" : size === "sm" ? " btn-sm" : "");
    return (
        <button className={classes} onClick={onClick} >
            {title}
        </button>
    );
};
Button.defaultProps = {
    color: "primary",
    type: "circled"
};
Button.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string
};
export default Button;
