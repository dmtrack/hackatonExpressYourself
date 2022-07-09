import React from "react";
import PropTypes from "prop-types";

const CircleProgress = ({ size, color, percent }) => {
    const getColorName = (color) => {
        switch (color) {
        case "primary": return "blue";
        case "secondary": return "gray";
        case "success": return "green";
        case "danger": return "red";
        case "warning": return "yellow";
        case "info": return "deepskyblue";
        case "light": return "white";
        case "dark": return "black";
        }
    };

    const width = size / 20;
    const radius = (size - width) / 2;
    const viewBox = `0 0 ${size} ${size}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * percent / 100;
    return <svg
        max-width="100%"
        max-height="100%"
        viewBox={viewBox}>
        <circle
            style={{
                fill: "none"
            }}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={`${width}px`} />
        <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={`${width}px`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{
                stroke: getColorName(color),
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none"
            }} />
        <text
            style={{
                fill: getColorName(color),
                fontSize: `${size / 80}rem`
            }}
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle">{`${percent}%`}
        </text>
    </svg>;
};
CircleProgress.defaultProps = {
    size: 200,
    color: "blue"
};
CircleProgress.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    percent: PropTypes.number
};
export default CircleProgress;
