import React from "react";
import PropTypes from "prop-types";
import CircleProgress from "./circleProgress";

const Progress = ({ percent, title, color, type }) => {
    if (type === "bar" || type === "animatedStripe") {
        const classes = `progress-bar bg-${color}` +
            (type === "animatedStripe" ? " progress-bar-striped progress-bar-animated" : "");
        return <>
            <p>{title}</p>
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
    return (
        <>
            <p>{title}</p>
            <CircleProgress percent={percent} color={color} />
        </>
    );
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
