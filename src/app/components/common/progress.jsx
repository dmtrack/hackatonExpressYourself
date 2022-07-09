import React from "react";
import PropTypes from "prop-types";

const Progress = ({ percent, title, color, type }) => {
    if (type === "bar" || type === "animatedStripe") {
        const classes = `progress-bar bg-${color}` +
            (type === "animatedStripe" ? " progress-bar-striped progress-bar-animated" : "");
        return <>
            <h4>{title}</h4>
            <div className="progress">
                <div
                    className={classes}
                    role="progressbar"
                    style = {{ width: `${percent}%` }}
                    aria-valuenow={percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {`${percent}%`}
                </div>
            </div>
        </>;
    };
    return <>
    circle progress
    </>;
};
Progress.defaultProps = {
    percent: 0,
    color: "primary",
    type: "bar"
};
Progress.propTypes = {
    percent: PropTypes.number,
    color: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string
};

export default Progress;
