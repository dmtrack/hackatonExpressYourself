import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ onClick, status, ...rest }) => {
    return (
        <button
            className="btn btn-light btn-sm border  border-2 border-primary mx-4"
            onClick={onClick}
        >
            <i
                className={"bi bi-bookmarks" + (status ? "-fill" : "")}
            ></i>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool,
    onClick: PropTypes.func
};

export default BookMark;
